import cdk = require('@aws-cdk/core');
import iam = require('@aws-cdk/aws-iam');
import sns = require('@aws-cdk/aws-sns');
import subs = require('@aws-cdk/aws-sns-subscriptions');
import lambda = require('@aws-cdk/aws-lambda');
import apigateway = require('@aws-cdk/aws-apigateway');

export class WebsiteStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const topic = new sns.Topic(this, 'MessageMeTopic', {
            displayName: 'SNS topic for the MessageMe system',
        });
        topic.addSubscription(new subs.EmailSubscription('contact@cassiius.dev'));

        const lambdaRole = new iam.Role(this, 'www-lambda-execution-role', {
            assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        });
        topic.grantPublish(lambdaRole);

        const messageMeLambda = new lambda.Function(this, 'MessageMeLambda', {
            code: lambda.Code.asset('../www-lambda/WebsiteLambda/bin/Release/netcoreapp2.1/WebsiteLambda.zip'),
            handler: 'WebsiteLambda::WebsiteLambda.Function::FunctionHandler',
            timeout: cdk.Duration.seconds(30),
            runtime: lambda.Runtime.DOTNET_CORE_2_1,
            environment: {
                snsEmailTopicArn: topic.topicArn,
            },
            role: lambdaRole,
            memorySize: 256
        });

        const api = new apigateway.RestApi(this, 'messageMeApi', {
            restApiName: 'Message me API',
        });
        const integration = new apigateway.LambdaIntegration(messageMeLambda);

        const v1 = api.root.addResource('v1');
        const messages = v1.addResource('messages');
        messages.addMethod('POST', integration, { apiKeyRequired: false });
    }
}

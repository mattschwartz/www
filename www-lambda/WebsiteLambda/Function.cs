using Amazon.Lambda.Core;
using Amazon.SimpleNotificationService;
using Amazon.SimpleNotificationService.Model;
using Newtonsoft.Json;
using System;
using WebsiteLambda.DataTypes;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace WebsiteLambda
{
    public class Function
    {
        private readonly string _emailTopicArn;
        private readonly AmazonSimpleNotificationServiceClient _snsClient;

        public Function()
        {
            _emailTopicArn = EnvironmentHelper.GetEmailTopicArn();
            _snsClient = new AmazonSimpleNotificationServiceClient();
        }

        public void FunctionHandler(WebsiteMessageContainer input)
        {
            string snsMessage = JsonConvert.SerializeObject(input);

            Console.WriteLine("Received input: {0}", input);

            PublishResponse response = _snsClient.PublishAsync(_emailTopicArn, snsMessage).Result;

            Console.WriteLine("Received SNS publish response. HTTP status= '{0}', MessageId= '{1}'", response.HttpStatusCode, response.MessageId);
        }
    }
}

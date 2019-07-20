using System;

namespace WebsiteLambda
{
    static class EnvironmentHelper
    {
        private static readonly string SnsEmailTopicArnEnvironmentVariable = "snsEmailTopicArn";

        public static string GetEmailTopicArn()
        {
            return Environment.GetEnvironmentVariable(SnsEmailTopicArnEnvironmentVariable);
        }
    }
}

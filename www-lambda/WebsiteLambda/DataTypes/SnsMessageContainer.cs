using System;

namespace WebsiteLambda.DataTypes
{
    class SnsMessageContainer
    {
        public string From { get; set; }
        public string Message { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}

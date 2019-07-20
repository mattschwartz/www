namespace WebsiteLambda.DataTypes
{
    public class WebsiteMessageContainer
    {
        /// <summary>
        /// Who sent the message.
        /// </summary>
        public string From { get; set; }

        /// <summary>
        /// The contents of the message.
        /// </summary>
        public string Message { get; set; }

        public override string ToString()
        {
            return $"[From= '{From}', Message= '{Message}']";
        }
    }
}

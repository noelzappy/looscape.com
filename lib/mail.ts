const client = require("@mailchimp/mailchimp_marketing")

client.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAIL_CHIMP_API_KEY,
    server: process.env.NEXT_PUBLIC_MAIL_CHIMP_SERVER_PREFIX
  });

  export default client
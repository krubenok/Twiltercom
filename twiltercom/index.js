const qs = require("querystring");
const VoiceResponse = require("twilio").twiml.VoiceResponse;
const { IncomingWebhook } = require("@slack/webhook");
const url = process.env.SLACK_URL;
const webhook = new IncomingWebhook(url);

module.exports = function(context, req) {
    context.log("JavaScript HTTP trigger function processed a request.");
    const twiml = new VoiceResponse();
    const dial = twiml.dial();
    twiml.say("Hello");
    twiml.play({
        digits: "w999"
    });

    context.res = {
        status: 200,
        body: twiml.toString(),
        headers: { "Content-Type": "application/xml" },
        isRaw: true
    };

    context.done();

    (async () => {
        await webhook.send({
            text: "Ding Dong! Someone just buzzed in."
        });
    })();
};

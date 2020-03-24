require("dotenv").config();
const qs = require("querystring");
const VoiceResponse = require("twilio").twiml.VoiceResponse;
const webhook = require("discord-webhook-node");
const hook = new webhook.Webhook(process.env.DISCORD_WEBHOOK);

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

    console.log("I'm here!");
    (async () => {
        try {
            await hook.send("Ding Dong! Someone's at the door!");
            console.log("Successfully sent webhook!");
        } catch (e) {
            console.log(e.message);
        }
    })();

    context.done();
};

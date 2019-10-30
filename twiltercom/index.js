const qs = require("querystring");
const VoiceResponse = require("twilio").twiml.VoiceResponse;

module.exports = function(context, req) {
    
    context.log("JavaScript HTTP trigger function processed a request.");
    const twiml = new VoiceResponse();
    const dial = twiml.dial();
    twiml.say("Hello");
    dial.number({
        sendDigits: "w999"
    });

    context.res = {
        status: 200,
        body: twiml.toString(),
        headers: { "Content-Type": "application/xml" },
        isRaw: true
    };

    context.done();
};

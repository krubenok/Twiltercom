express = require("express");
VoiceResponse = require("twilio").twiml.VoiceResponse;
urlencoded = require("body-parser").urlencoded;
dotenv = require('dotenv').config();

app = express();

// Parse incoming POST params with Express middleware
app.use(urlencoded({ extended: false }));

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
app.post("/voice", (request, response) => {
    // Use the Twilio Node.js SDK to build an XML response
    twiml = new VoiceResponse();
    twiml.play({
        digits: "w999"
    });
    const dial = twiml.dial();
    dial.number({
        sendDigits: 'w999'
    });
    twiml.say("Hello");
    response.type("text/xml");
    response.send(twiml.toString());
});

// Create an HTTP server and listen for requests

app.listen(process.env.PORT || 1337);
console.log("Twilio Client app HTTP server running.");
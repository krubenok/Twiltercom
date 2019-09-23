const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const VoiceResponse = require("twilio").twiml.VoiceResponse;

const app = express();

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
app.post("/voice", (req, res) => {
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();

    // Use the <Gather> verb to collect user input
    const gather = twiml.gather({ numDigits: 4 });
    gather.say("Hello, please enter your access code: ");

    // If the user doesn't enter input, loop
    twiml.redirect("/voice");

    // Render the response as XML in reply to the webhook request
    response.type("text/xml");
    response.send(twiml.toString());
});

http.createServer(app).listen(1337, () => {
    console.log("Express server listening on port 1337");
});

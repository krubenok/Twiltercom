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

    /** helper function to set up a <Gather> */
    function gather() {
        gatherNode = twiml.gather({ numDigits: 4 });
        gatherNode.say(precess.end.GREETING);

        // If the user doesn't enter input, loop
        twiml.redirect("/voice");
    }

    // If the user entered digits, process their request
    if (request.body.Digits) {
        switch (request.body.Digits) {
            case process.env.ACCESS_CODE:
                twiml.say(precess.end.ACCEPTED);
                twiml.play({
                    // Plays DFTM tones passed in .env file. 
                    digits: process.env.TONE
                });
                console.log(request.body.Digits);
                break;
            default:
                twiml.say(precess.end.REJECTED).pause();
                gather();
                break;
        }
    } else {
        // If no input was sent, use the <Gather> verb to collect user input
        gather();
    }

    // Render the response as XML in reply to the webhook request
    response.type("text/xml");
    response.send(twiml.toString());
});

// Create an HTTP server and listen for requests
if (process.env.DEPLOY_MODE == "DEV") {
    app.listen(1337);
    console.log("Twilio Client app HTTP server running at http://127.0.0.1:1337");
}
else if (process.env.DEPLOY_MODE == "PROD") {
    app.listen(80);
    console.log("Twilio Client app HTTP server running at http://127.0.0.1:443");
}
else {
    console.log("Error in .env file. Check DEPLOY_MODE.");
}
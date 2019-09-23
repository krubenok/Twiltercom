const express = require("express");
const VoiceResponse = require("twilio").twiml.VoiceResponse;
const urlencoded = require("body-parser").urlencoded;

const app = express();

// Parse incoming POST params with Express middleware
app.use(urlencoded({ extended: false }));

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
app.post("/voice", (request, response) => {
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();

    /** helper function to set up a <Gather> */
    function gather() {
        const gatherNode = twiml.gather({ numDigits: 4 });
        gatherNode.say("Please enter your access code:");

        // If the user doesn't enter input, loop
        twiml.redirect("/voice");
    }

    // If the user entered digits, process their request
    if (request.body.Digits) {
        switch (request.body.Digits) {
            case "1234":
                twiml.say("You entered 1 2 3 4");
                twiml.play({
                    digits:'w999'
                });
                console.log(request.body.Digits);
                break;
            default:
                twiml.say("Sorry, I don't understand that choice.").pause();
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

// Create an HTTP server and listen for requests on port 3000
console.log("Twilio Client app HTTP server running at http://127.0.0.1:1337");
app.listen(1337);

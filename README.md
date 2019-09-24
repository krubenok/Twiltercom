# Twiltercom
 A Twillio powered intercom-answering bot for guest access to apartments.

 Twiltercom aims to replace the phone number listed on an apartment building intercom so that you don't need to pickup the phone to let people into the building. With this, you can simply give people and access code and they can grant themselves entry without your phone ringing.

 It uses the Twilio programmable voice API's to handle an incoming call and create an IVR like call tree.

## Environment Variables
See the `.env.example` file. Set these variables as you wish for your situation. 

## Hosting
This should be pretty easy to host in Heroku. TODO: make a deploy to Heroku button to make this really easy

## Setup
Once you have Twiltercom running somewhere, you'll need to point your twilio phone number's incoming voice to post to that endpoint. Note it needs to be HTTPS. You can do that at this link. https://www.twilio.com/console/voice/numbers
# Twiltercom
 A Twillio powered intercom-answering bot for guest access to apartments.

 Twiltercom aims to replace the phone number listed on an apartment building intercom so that you don't need to pickup the phone to let people into the building. 

 It uses the Twilio programmable voice API's to handle an incoming call and dial 9.

## Hosting
This should be pretty easy to host in Heroku. TODO: make a deploy to Heroku button to make this really easy

## Setup
Once you have Twiltercom running somewhere, you'll need to point your twilio phone number's incoming voice to post to that endpoint. Note it needs to be HTTPS. You can do that at this link. https://www.twilio.com/console/voice/numbers

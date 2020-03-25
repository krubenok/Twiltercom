# Twiltercom
 A Twillio powered intercom-answering bot for guest access to apartments.

 Twiltercom aims to replace the phone number listed on an apartment building intercom so that you don't need to pickup the phone to let people into the building. 

 It uses the Twilio programmable voice API's to handle an incoming call and dial 9.

## Hosting
This is designed to be run as an Azure function. The Github Action `deploy.yml` should deploy any subsequent updates to the `master` branch automatically to Azure.

## Setup
Once you have Twiltercom running somewhere, you'll need to point your twilio phone number's incoming voice to post to that endpoint. Note it needs to be HTTPS. You can do that at this link. https://www.twilio.com/console/voice/numbers

### Discord Webhook
The application uses a Discord Webhook to send a notification every time your buzzer is opened with Twiltercom. Set a value in your `local.settings.json` for `"DISCORD_WEBHOOK"`. You can then push these settings up to your Azure Function instance. 
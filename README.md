# OskiBot - A course recommender for UC Berkeley students
## Inspired by Oski, the best collegiate mascot in America

Oski can give you recomendations based on what requirements you still need to fulfill

## How to run

1. Download [ngrok](https://ngrok.com)

2. From a Mac/Linux bash shell:

    ```shell
    git clone https://github.com/templink
    cd project-name
    npm install
    ```

3. Unzip and launch ngrok to expose port 3000 of your local machine to the internet:
    ```shell
    unzip /path/to/ngrok.zip
    ./ngrok http 3000
    ```
And keep this running in the background

4. Change the PUBLIC_URL in the .env file to be the url given by ngrok and make sure to pick the HTTPS address that ngrok is now exposing. Note that ngrok exposes HTTP and HTTPS protocols, make sure to pick the HTTPS address.

5. Create a Bot account at ['Webex for Developers'](https://developer.webex.com/add-bot.html), and copy your bot's access token to the {your bots access token}

    ```shell
    ACCESS_TOKEN={your bots access token} node bot.js
    ```
6. Now you have your bot running!


1. [Optional] Open the `.env` file and modify the settings to accomodate your bot.

    _Note that you can also specify any of these settings via env variables. In practice, the values on the command line or in your machine env will prevail over .env file settings_

    To successfully run your bot, you'll need to specify a PUBLIC_URL for your bot, and a Webex Teams API access token (either in the .env settings or via env variables). In the example below, we do not modify any value in settings and specify all configuration values on the command line.

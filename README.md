# OskiBot - A course recommender for UC Berkeley students
**Inspired by Oski, the best collegiate mascot in America**

Oski can give you recomendations based on what requirements you still need to fulfill

## How to Deploy on the Web using Microsoft Azure

1. Create a Bot account at ['Webex for Developers'](https://developer.webex.com/add-bot.html), and copy your bot's access token to the clipboard. Set the ACCESS_TOKEN in the .env file to your bot's access token

2. Set up a Azure Account and download Visual Studio Code

3. Install the Azure App Service Extension in VS Code

4. Follow the instructions at https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs#deploy-to-azure to deploy your app to azure.

5. After recieving a URL from Azure, replace the PUBLIC_URL in the .env file with your web app's URL

6. Now you have your bot deployed onto the web and you can start talking with your bot in Cisco Webex Teams!

## How to run locally

1. From a Mac/Linux bash shell:

    ```shell
    git clone https://github.com/mbzhu1/oskibot
    cd oskibot
    npm install
    ```

2. Launch ngrok to expose port 3000 of your local machine to the internet:
    ```shell
    ./ngrok http 3000
    ```
And keep this running in the background

3. Change the PUBLIC_URL in the .env file to be the url given by ngrok and make sure to pick the HTTPS address that ngrok is now exposing. Note that ngrok exposes HTTP and HTTPS protocols, make sure to pick the HTTPS address.

4. Create a Bot account at ['Webex for Developers'](https://developer.webex.com/add-bot.html), and copy your bot's access token to the {your bots access token}

    ```shell
    ACCESS_TOKEN={your bots access token} node bot.js
    ```
5. Now you have your bot running!


<img src="./media/oski_recc_demo.jpg" width="500" height="1200">


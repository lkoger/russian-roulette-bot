# Discord Bot Template
## Project Description
This project contains boilerplate code for a discord bot, using Discord.js. This project is setup to be a repository of boilerplate code that I find useful, and to make it easy for me to jump start developing different bots. If anyone else finds it useful, great.

# Setup

## Summary
This template was setup using the same basic layout described in the [Discord.js guide](https://discordjs.guide/). For any questions you might have, that guide will probablly be able to help. For more indepth information on how this template is structured, checkout the [Creating Your Bot](https://discordjs.guide/creating-your-bot/) section of the guide -- the Command handling and Event handling sections are particularly helpful.

## Install node
If you don't have node, install it. There's various ways to install it.
Once it's installed, open a terminal in the project's root directory. Type the following in the terminal.
```console
> npm install
```
This should install any dependencies needed to get the bot running. If you're interested in what the dependencies are, check out the `packages.json` file.

## Create a config.json
In order to have the base bot work, you'll need to setup a config.json file with your info. This is what the file should look like.
```json
{
    "token": "<YOUR TOKEN HERE>",
    "clientId": "<YOUR CLIENT ID HERE>",
    "guildId": "<YOUR GUILD ID HERE>"
}
```
If these look foreign, please reference the [setting up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) section of the aforementioned guide. After generating a token, getting your bot's client ID, and copying your server's (guild) ID, you'll need to actually add your bot to your desired server. The aforementioned guide also has instructions on that [here](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links).

## Register Commands
Assuming you've made a config.json file and set all the approriate fields, you'll need to register your slash commands. This should only be done once every time you've added or removed a slash command. As long as you have a terminal navigated to the current directory, type the following and hit enter.
```console
> node deploy-commands
```
## Starting the Bot
Assuming you receive the message "`Successfully registered application commands.`" after running the last line in the terminal, you should be able to type the following and git enter.
```console
> node bot
```
If it successfully connects, you should see "`Ready! Logged in as <bot application name>`" in the terminal. If so, congratulcations! If not, the [Discord.js guide](https://discordjs.guide/) is a good place to start troubleshooting. Best of luck.
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token_secret } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

console.log(token_secret)
client.login(token_secret);
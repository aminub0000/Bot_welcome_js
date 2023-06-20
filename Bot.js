require("dotenv").config();

const { Client, Intents , GatewayIntentBits  } = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'hi') {
    message.channel.send('Hello there!');
  }
});

client.on('guildMemberAdd', (member) => {
  console.log(`dkhal l methode`);
  const channelName = 'general'; // Replace 'general' with the name of your desired channel

  const channel = member.guild.channels.cache.find(ch => ch.name === channelName);
  if (!channel) return;
  console.log(`Welcome to the server, ${member.user.tag}!`);
  channel.send(`Welcome to the server, ${member.user}!`); // Send the welcome message
});

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('Discord token is not defined. mochkil f token tchicki dakchi .');
} else {
  client.login(token);
}
require("dotenv").config();

const { Client, Intents ,MessageEmbed } = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});


client.on('messageCreate', (message) => {
  if (message.content.toLowerCase() === 'hi') {
    const embed = new MessageEmbed().setTitle('Greetings').setDescription('Hello there!').setColor('#00ff00');
    message.channel.send({ embeds: [embed] });
  }
 
});

client.on('guildMemberAdd', (member , message) => {
  console.log(`Entered guildMemberAdd event`);
  const channelName = 'general'; // Replace 'general' with the name of your desired channel

  const channel = member.guild.channels.cache.find(ch => ch.name === channelName);
  if (!channel) return;
  console.log(`Welcome to the server, ${member.user.tag}!`);
  channel.send(`Welcome to the server, ${member.user.tag}!`); 
  
  const embed = new MessageEmbed()
      .setTitle('Welcome')
      .setDescription(`Welcome to the server, ${member.user}!`)
      .setColor('#00ff00');
      channel.send({ embeds: [embed] })
      .then(sentMessage => {
        // Adding reactions to the poll message
        sentMessage.react('❌'); // Thumbs up
        sentMessage.react('✅'); // Thumbs down
      })
      .catch(console.error);
      
      const welcomeMessage = `Welcome to the server, ${member.user.tag}!`;

      member.send(welcomeMessage) // Sending a welcome message in private
        .then(() => console.log(`Sent a welcome message to ${member.user.tag}`))
        .catch(console.error);
});



const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('Discord token is not defined. mochkil f token tchicki dakchi .');
} else {
  client.login(token);
}

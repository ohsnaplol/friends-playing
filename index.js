require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content == '!letsplay') {
		const memberId = message.member.id;
		const memberPresence = message.member.presence.status
		// list of users in channel
		const voiceChannelMembers = message.member.voice.channel.members
		// WHY LIMIT IT TO NEEDING TO BE IN VOICE CHANNEL???
		// presence of the users in channel
		// console.log(voiceChannelMembers.)
		// if any match the same game send people message ohsnaplol and Fuzzles are playing Gears of War. Come join them!

		let invitation = "Let's play!"
		// message.channel.send(invitation)
	}
});

client.on('', update => {
	console.log(update)
})
// every thirty seconds see guild mate prescences and see if they're in vc

client.login(process.env.key)
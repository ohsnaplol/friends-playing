require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content == '!letsplay') {
		const senderPresence = message.member.presence.activities
		if (!senderPresence[0]) {
			return message.channel.send(`Sorry ${message.author.username}, you are not playing anything!`)
		}
		const senderGame = senderPresence[0].name
		const senderType = senderPresence[0].type
		const guildMembers = message.guild.members.cache
		const membersPlayingSameGame = guildMembers.filter(member => {
			// Ignore self
			if (message.author.id === member.id) {
				return false
			}
			if (member.presence.activities[0]) {
				console.log(member.presence.activities)
				const memberGame = member.presence.activities[0].name
				const memberType = member.presence.activities[0].type
				return memberType === senderType && memberGame === senderGame
			}
			return false
		})
		if (membersPlayingSameGame.size < 1) {
			return message.channel.send(`${message.author.username} wants to play some ${senderGame}!`)
		}
		const nicknames = membersPlayingSameGame.map(member => {
			return member.user.username
		})
		if (membersPlayingSameGame.size === 1) {
			return message.channel.send(`${message.author.username} and ${nicknames} wants to play some ${senderGame}!`)
		}
		return message.channel.send(`${message.author.username}, ${nicknames} are playing ${senderPresence[0].name}! Come join them!`)
	}
});

client.on('', update => {
	console.log(update)
})
// every thirty seconds see guild mate prescences and see if they're in vc

client.login(process.env.key)
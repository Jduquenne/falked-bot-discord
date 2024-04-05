import { Events, RichEmbed } from 'discord.js';

export default {
	name: Events.MessageDelete,
	category: 'message',
	enabled: true,
	once: true,
	run: async (message) => {
		console.log(message);
		if(message.author.bot) return
		const embed = new RichEmbed() // Create a new RichEmbed
			.setColor('RED')
			.setTimestamp()
			.setFooter(`ID: ${msg.id}`)
			.setAuthor(msg.author.tag, msg.author.displayAvatarURL)
			.setTitle(`Message deleted in #${msg.channel.name}`)
			.setDescription(msg.cleanContent);

		message.channel.find((r) => r.name.toLowerCase() === 'discord-bot-dev').send({ // Send the embed to the defined channel
			embed
  		});
	},
};
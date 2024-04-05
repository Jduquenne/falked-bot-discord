import { Events } from 'discord.js';

export default {
	name: Events.MessageCreate,
	category: 'message',
	enabled: true,
	once: true,
	run: async (message) => {
		if(message.author.bot) return;
		if(message.content === "ping") {
			message.reply('Pong!')
		}
		message.reply({ content: "Hello From Bot" });
	}
};
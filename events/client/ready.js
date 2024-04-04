import { ActivityType } from 'discord.js';

export default {
	name: 'ready',
	category: 'client',
	enabled: true,
	once: true,
	run: async (client) => {
		client.user.setActivity('👋 Do his job of bot', { type: ActivityType.Custom });
        client.channels.fetch('1225354017870315580')
        .then(channel => {
            channel.send(client.customBotMessage.messagesAleatoires());
        })
		console.log(`Discord Bot is now online with ${client.users.cache.size} users and ${client.guilds.cache.size} servers.`);
	},
};
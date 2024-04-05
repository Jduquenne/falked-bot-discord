import { ActivityType, Events } from 'discord.js';

export default {
	name: Events.ClientReady,
	category: 'client',
	enabled: true,
	once: true,
	run: async (client) => {
		client.user.setActivity('👋 Doing his job of bot', { type: ActivityType.Custom });
        client.channels.fetch('1225354017870315580')
            .then(channel => {
                channel.send(client.util.sendRandomMessage(client.customBotMessage.randomReadyBotMessages()));
            })
		console.log(`Discord Bot is now online with ${client.users.cache.size} users and ${client.guilds.cache.size} servers.`);
	},
};
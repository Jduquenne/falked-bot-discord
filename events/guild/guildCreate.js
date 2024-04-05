import { Events } from 'discord.js';

export default {
	name: Events.GuildCreate,
	category: 'guild',
	enabled: true,
	once: false,
	run: async (guild) => {
		const client = guild.client;

		console.log(`⭐ ${client.user.username} has been added to the server: ${guild.name}`);
	},
};
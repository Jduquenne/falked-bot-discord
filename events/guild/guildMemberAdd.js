import { Events } from 'discord.js';

export default {
	name: Events.GuildMemberAdd,
	category: 'guild',
	enabled: true,
	once: false,
	run: async (member) => {
		console.log(`👤 ${member.user.username} has joined ${member.guild.name}`);
	},
};
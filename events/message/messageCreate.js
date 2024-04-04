export default {
	name: 'messageCreate',
	category: 'message',
	enabled: true,
	once: true,
	run: async (message) => {
                if(message.author.bot) return;
                message.reply({ content: "Hello From Bot" });
	},
};
import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';

import Util from '../util/Util.js';
import CustomBotMessage from '../util/CustomBotMessage.js';

export default class FalkedDiscordBotClient extends Client {
	constructor(...opt) {
		super({
			opt,
			allowedMentions: {
				parse: [
					'users',
					'roles',
				],
				repliedUser: true,
			},
			partials: [
				Partials.GuildMember,
				Partials.Message,
				Partials.Channel,
				Partials.User,
				Partials.Reaction,
			],
			intents: [
				GatewayIntentBits.Guilds,
				GatewayIntentBits.GuildMembers,
				GatewayIntentBits.GuildEmojisAndStickers,
				GatewayIntentBits.GuildMessages,
				GatewayIntentBits.GuildPresences,
				GatewayIntentBits.MessageContent,
				GatewayIntentBits.GuildMessageReactions,
				GatewayIntentBits.DirectMessages,
				GatewayIntentBits.DirectMessageReactions,
			],
		});

		this.util = new Util(this);
		this.customBotMessage = new CustomBotMessage(this)

		this.commands = new Collection();
		this.events = new Collection();
	}

	async login() {
		await super.login(process.env.TOKEN);
	}
}
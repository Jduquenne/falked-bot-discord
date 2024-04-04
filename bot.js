import FalkedDiscordBotClient from './handler/Client.js';
import dotenv from 'dotenv';

dotenv.config();

import commandHandler from './handler/Command.js';
import eventHandler from './handler/Event.js';

const client = new FalkedDiscordBotClient(process.env.TOKEN);

commandHandler(client);
eventHandler(client);

console.log('Bot is now starting up!');

client.login();
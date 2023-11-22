import { config } from 'dotenv';
import { Telegraf } from 'telegraf';
import { readdir } from 'fs/promises';
import { message } from 'telegraf/filters';
import fs from 'fs';
import path from 'path';

config(); // Load environment variables from .env file

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => ctx.reply('Welcome! Send /hello to greet.'));

async function registerCommands() {
  try {
    const commandFiles = await readdir(path.join('./commands'));
    console.log(commandFiles);
    for (const file of commandFiles) {
      if (file.endsWith('.mjs')) {
        const { default: commandModule } = await import(`./commands/${file}`);
        const commandName = path.basename(file, '.mjs');
        bot.command(commandName, commandModule);
      }
    }
    bot.launch();
    console.log('Bot started');
  } catch (error) {
    console.error('Error registering commands or starting bot:', error);
  }
}

registerCommands();

console.log(process.env.TOKEN);
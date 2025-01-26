import { config } from 'dotenv';
import { Telegraf } from 'telegraf';
import { readdir } from 'fs/promises';
import { message } from 'telegraf/filters';
import fs from 'fs';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose'

config()

const url = "mongodb://ryanDabest1:ILOVEANIMe@cluster0-shard-00-00.zheqh.mongodb.net:27017,cluster0-shard-00-01.zheqh.mongodb.net:27017,cluster0-shard-00-02.zheqh.mongodb.net:27017/?ssl=true&replicaSet=atlas-11l92a-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(url, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});


const app = express();

app.get('/', (req, res) => {
  res.send("Hello!")
})

const port = 3000
app.listen(port, () => {
  console.log(`Telegram bot running at ${port}`)
})



const TOKEN = process.env['TOKEN']
const bot = new Telegraf(TOKEN);



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
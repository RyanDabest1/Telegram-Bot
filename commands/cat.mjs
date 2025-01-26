import { config } from 'dotenv';
import fetch from 'node-fetch'

const apiKey = process.env['CATAPI']
const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`

const cat = async (ctx) => {
  const res = await fetch(url);
  const data = await res.json();
  await ctx.replyWithPhoto({url : data[0].url})  
}


export default cat;
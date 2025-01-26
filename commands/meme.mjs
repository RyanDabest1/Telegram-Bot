import fetch from 'node-fetch';


const fetchMemeAndReply = async (ctx) => {
  async function fetchRandomMeme() {
    try {
      const response = await fetch('https://meme-api.com/gimme');

      if (!response.ok) {
        throw new Error('Failed to fetch meme');
      }

      const memeData = await response.json();
      return memeData; 
    } catch (error) {
      console.error('Error fetching meme:', error);
      return null;
    }
  }

  try {
    let meme = await fetchRandomMeme();

    await ctx.replyWithPhoto({ url: meme.url }, { caption: meme.title });

  } catch (error) {
    console.error('Error handling meme request:', error);
    ctx.reply('Failed to fetch a meme. Try again later.');
  }
};

export default fetchMemeAndReply;
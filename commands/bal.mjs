import UserModel from './util/userSchemer.mjs';

const bal = async (ctx) => {
  const userId = ctx.from.id;
  const username = ctx.message.from.username; 

  try {
    let user = await UserModel.findOne({ userId });
    if (!user) {
      user = new UserModel({ userId, username});
      await user.save()
    }
    
    if (user) {
      await ctx.reply(`@${username}, Your balance is $${user.balance} 💰`);
    }
   
    
  } catch (error) {
    console.error('Error occurred:', error);
    await ctx.reply('Oops! Something went wrong.');
  }
  
}

export default bal;
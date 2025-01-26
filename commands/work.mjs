import UserModel from './util/userSchemer.mjs';

const work = async(ctx) => {
  const userId = ctx.from.id;
  const username = ctx.message.from.username; 


    try {
      let user = await UserModel.findOne({ userId });
      if (!user) {
        user = new UserModel({ userId, username});
      }

      const currentTime = Date.now();
      const lastWorkTime = user.lastWork || 0;
      const timeSinceLastWork = currentTime - lastWorkTime;

      if (timeSinceLastWork < 600000) { 
        const remainingTime = 600000 - timeSinceLastWork;
        const remainingMinutes = Math.ceil(remainingTime / 60000);

        await ctx.reply(`Sorry, you can work again in ${remainingMinutes} minutes.`);
        return;
      }

      user.balance += 2000; 
      user.lastWork = currentTime;
      await user.save();

      await ctx.reply(`@${username}, You worked and earned $2000 cash! 💰 💰`);
    } catch (error) {
      console.error('Error occurred:', error);
      await ctx.reply('Oops! Something went wrong.');
    }
  };


export default work;
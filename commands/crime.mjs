import crimes from './util/crimeList.mjs'
import UserModel from './util/userSchemer.mjs'
const commitCrime = async (ctx) => {
    const userId = ctx.from.id
    const username = ctx.message.from.username
    try {
        let user = await UserModel.findOne({userId})
        if(!user) {
            user = new UserModel({userId, username})
            await user.save()
        }

        const currentTime = Date.now();
        const lastCrimeTime = user.lastCrime || 0;
        const timeSinceLastCrime = currentTime - lastCrimeTime;

        if(timeSinceLastCrime < 15000){
            const remainingTime = 15000 - timeSinceLastCrime;
        await ctx.reply(`Sorry, you can commit crime again in ${remainingTime/1000} seconds.`);
        return;
        }
        
        const crime = crimes[Math.floor(Math.random() * crimes.length)]; 
    
        const crimeSuccess = Math.random() < crime.successRate;
    
        if (crimeSuccess) {
          const reward = Math.floor(Math.random() * (crime.rewardRange[1] - crime.rewardRange[0] + 1)) + crime.rewardRange[0]; // Generate a random reward within the range
          user.balance += reward; 
          user.lastCrime = currentTime;
          user.totalCrimes += 1;
          await user.save();
          await ctx.reply(`${crime.successMessage} You earned $${reward}! Crime successful! 💰`);
        } else {
          await ctx.reply(`${crime.failMessage} Crime failed. 🚨`);
        }

       


    
        
      } catch (error) {
        console.error('Error:', error);
        await ctx.reply('An error occurred while attempting the crime.');
      }
}
export default commitCrime;

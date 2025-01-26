import UserModel from './util/userSchemer.mjs';

const giveMoney = async (ctx) => {
    const userId = ctx.from.id
    const message = ctx.message.text;
    const username = ctx.message.from.username; 
    if(userId == 2046677758){
        try {
        let user = await UserModel.findOne({ userId });
        if (!user) {
            user = new UserModel({ userId, username});
            user.save()
        }
        
        const [command, target] = message.split(" ") 
        user.balance += 100000000;
        await user.save();

        await ctx.reply (`Giving a total amount of $100000000 to the Creator...`)
        } catch (error) {
            console.log(error)
        }
    } else {
        await ctx.reply(`Sorry, but you don't have permission to use this command!`)
    }
}
export default giveMoney;
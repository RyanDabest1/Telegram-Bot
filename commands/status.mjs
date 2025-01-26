import UserModel from './util/userSchemer.mjs' 

const showStatus = async (ctx) => {
    let userId = ctx.from.id;
    let username = ctx.message.from.username;

    try {
        let user = await UserModel.findOne({userId})

        if(!user) {
            user = new UserModel({userId, username})
            await user.save()
        }

        let statusMsg = `@${username}  (❤️${user.health})\n\n`
        statusMsg += `Balance : $${user.balance}\nTotal items : ${user.inventory.length}\nProfession : ${user.profession}\nTotal Crimes Committed : ${user.totalCrimes}`
        ctx.reply(statusMsg)
    }
    catch (error) {
        console.log(error)
        await ctx.reply("Opps! Error encountered")
    }




}
export default showStatus;
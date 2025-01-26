import UserModel from './util/userSchemer.mjs';

const showInv = async (ctx) => {
    const userId = ctx.from.id;
    const username = ctx.message.from.username; 
    try{
        let user = await UserModel.findOne({userId})
        if(!user){
            user = new UserModel({ userId, username});
            await user.save()
        }
        let inv = await user.inventory
        if(inv){
            let inventoryMsg = `@${username}'s Inventory 🎒 \n\n`

        inv.map((item) => {
            inventoryMsg += `${item.icon} ${item.name} \n ${item.description}\n\n`
        })
        await ctx.reply(inventoryMsg)

        } else {
            await ctx.reply(`@${username}!, Your inventory is empty`)
        }

    } catch (error) {
          console.log(error)

    }
}
export default showInv;
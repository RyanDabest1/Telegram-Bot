import shopItems from "./util/shopItems.mjs"
import UserModel from "./util/userSchemer.mjs";

async function hasEnoughCurrency (userId, itemPrice) {
    try {
        let user = await UserModel.findOne({userId})
        if (user.balance >= itemPrice ){
            return true;
        } else {
            return false;
        }

    } 
    catch (error) {
        console.log(error)

    }
}

async function deductCurrency (userId, amount) {
    try {
        let user = await UserModel.findOne({userId})

        user.balance -= amount;
        await user.save()
    } 
    catch (error) {
        console.log(error)

    }

}
async function addToInventory (userId,item) {
    try {
        let user = await UserModel.findOne({userId})
        user.inventory.push(item)
    await user.save()
    } 
    catch (error) {
        console.log(error)

    }


}

async function checkDup (userId, item){
        try {
            let user = await UserModel.findOne({ userId });
            
            const foundDuplicate = user.inventory.some(userItem => userItem.name === item.name);
    
            if (foundDuplicate) {
                console.log("Found duplicate");
                return false;
            } else {
                console.log("No duplicate found");
                return true;
            }
        } catch (error) {
            console.log(error);
            return true; 
        }
    
}
const buy = async (ctx) => { 
    const userId = ctx.from.id
    const username = ctx.message.from.username
    const selectedItemName = ctx.message.text.split(' ')[1]; 
    let user = await UserModel.findOne({userId})
    if(!user){
        user = new UserModel({userId, username})
    }
    if(selectedItemName){
    const selectedShopItem = shopItems.find((item) => item.name === selectedItemName);
    let isNotDup = await checkDup(userId, selectedShopItem)
        console.log(isNotDup)
    if(selectedShopItem && isNotDup){
    let enough = await hasEnoughCurrency(userId, selectedShopItem.price)
    if(enough){
        await deductCurrency(userId, selectedShopItem.price)
        await addToInventory(userId, selectedShopItem)
        await ctx.reply(`You have successfully purchased ${selectedShopItem.name}!`);
    } else {
        await ctx.reply('Failed to purchase. Insufficient funds or invalid item.');

    }
} else {
   ctx.reply("Invalid item Or You've already bought the item")
}
    } else {
        ctx.reply("invalid item")
    }
    
  
}

export default buy
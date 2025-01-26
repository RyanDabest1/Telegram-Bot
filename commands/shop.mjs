import shopItems from "./util/shopItems.mjs"

const showShop = async (ctx) => {
    let shopMessage = 'Welcome to the shop! Available items:\n\n';
    shopItems.forEach((item) => {
        shopMessage += `${item.id}. ${item.icon} \`${item.name} \` - Price: $${item.price}\n Description: ${item.description} \n\n`;
      });
      await ctx.replyWithMarkdown(shopMessage);

}

export default showShop;
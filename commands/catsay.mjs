
const url = "https://cataas.com/cat/says/"

const catSay = async (ctx) => {
  const message = ctx.message.text;
  const botmsg = message.split(' ')
  botmsg.splice(0,1)
  try{
  await ctx.replyWithPhoto({url : `https://cataas.com/cat/says/${botmsg.join(' ')}`})
  } catch (error) {
    console.log("error")
    ctx.reply("Address smt to say behind ur command! ")
  }
  
}
export default catSay;
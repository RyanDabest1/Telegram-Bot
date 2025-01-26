const replyAndDelete = (ctx) => {
    const message = ctx.message.text;
    const botmsg = message.split(' ')
    botmsg.splice(0,1)
    if(ctx.message.message_id){
    ctx.telegram.deleteMessage(ctx.message.chat.id, ctx.message.message_id);
    ctx.telegram.sendMessage(ctx.message.chat.id, botmsg.join(' '));
    }
  
  }
  export default replyAndDelete;

const TelegramApi = require('node-telegram-bot-api')

const token = '7393005940:AAFNP3j5XFfpc6x2GoiKsuljVUYd09doapo'

const bot = new TelegramApi(token, {polling: true, port: 8442}) 

//const bot = new TelegramApi(token, {webHook: true, port: 8443}) 

bot.on('message', msg => {
    console.log(bot.options);
    const  test = 123;
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(test || 8443)
    console.log('Text: ' + text);
    console.log('ChatId: ' + chatId);
    //new code row

    bot.sendMessage(chatId, 'Your message: ' + text);
})
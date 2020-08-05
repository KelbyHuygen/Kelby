const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQwNTEyNjY5ODM2MjQ3MTAx.XyqGKg.xDkxM-Z201i_yUYgVhL2Te3RmP0';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content.toLowerCase() === "wtf maat"){
        msg.reply('U dikke bomma maat');
    }
})

bot.login(token);

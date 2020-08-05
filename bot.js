const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQwNTEyNjY5ODM2MjQ3MTAx.XyqGKg.OLo_HiRbLxVYFPbxhKv8g3ri1SU';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('Hello');
    }
})

bot.login(token);

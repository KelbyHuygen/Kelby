const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzM1MTEyNjg1NTM2MDE4NTYy.XxbhCQ.XoIkN2w-gpdhxbuhL_d4gipb0oE';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('Hello');
    }
})

bot.login(token);

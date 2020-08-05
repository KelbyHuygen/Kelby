const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQwNTEyNjY5ODM2MjQ3MTAx.XyqGKg.xDkxM-Z201i_yUYgVhL2Te3RmP0';

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content.toLowerCase() === 'wtf maat'){
        msg.reply('U dikke boma maat');
    }
})
bot.on('message', msg=>{
    if(msg.content.toLowerCase() === 'ewa'){
        msg.channel.send('drerie');
    }
})
bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome-goodbye"); 
    if(!channel) return;

    channel.send(`Welcome to our server, ${member}`)
});
bot.on('guildMemberRemove', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome-goodbye");
    if(!channel) return;
    channel.send(`${member} just left our server`)
});
bot.login(token);

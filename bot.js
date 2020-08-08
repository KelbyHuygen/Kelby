const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQwNTEyNjY5ODM2MjQ3MTAx.XyqGKg.xDkxM-Z201i_yUYgVhL2Te3RmP0';
const version = '1.4.1';
const PREFIX = '?';
bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.reply('pong');
            break;

        case 'version':
            msg.channel.send('Version ' + version );
            break;
        
        case 'help':
            msg.channel.send(description);
            break;
            
        case 'clear':
            if(!args[1]) return msg.reply('Error, please type a number')
            msg.channel.bulkDelete(args[1]);    
        break;

        case 'about':
            const embed = new Discord.MessageEmbed()
            .setTitle('About')
            .addField('Version', version)
            .addField('Player name', msg.author.username)
            .addField('Author', '© - [̲̲̅̅K̲̲̅̅e̲̲̅̅l̲̲̅̅b̲̲̅̅y̲̲̅̅]#5236')
            .setThumbnail(msg.author.displayAvatarURL())
            .setFooter('Made with love <3')
            .setColor('#0014a8');
            msg.channel.send(embed);
        break;    
    }
})
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

    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome-goodbye"); 
    if(!channel) return;

    channel.send(`Welcome to our server, ${member}`)
});
bot.on('guildMemberRemove', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome-goodbye");
    if(!channel) return;
    channel.send(`${member} just left our server`)
});
bot.login(token);

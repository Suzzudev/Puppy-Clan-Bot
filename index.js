//By Puppy681Nuff\\
//saying that these things need discord.js
const{Client, Attachment, MessageAttachment} = require('discord.js');

//Says that the script requires discord.js
const Discord = require('discord.js');

//used to measure time for the time mutes
const ms = require('ms');

//used to say that the bot is a discord client
const bot = new Discord.Client();

//the version of the bot
const version = '0.5.0'; 

//Logging in
bot.token(PIlciB5dafwRkoxrKMh67sHrN_cN_m3p);

//the prefix before the commands
const PREFIX = 'woof?'

//turn on console message
bot.on('ready', () => {
    //logs that the bot is online
    console.log('this bot is online');
    //sets the activity of my bot
    bot.user.setActivity('with a bone.', {type: 'PLAYING'}).catch(console.error);
})

//start of the commands
bot.on('message', msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        
        //replies woof
        case 'Nuff' :    //the cases are what the bot is looking for
        msg.reply("Woof!"); // actual part that replies
        break;
        
        // My main youtube channel
        case 'website' : 
        //This part is the sending of my channel link
        msg.channel.send('https://www.youtube.com/channel/UCF2rI8Xnkfsj267xUt9p_3w');
        break;
        
        // Gives a bit of information about the bot
        case 'info' : 
        if(args[1] === 'version'){
            //sends : Version : Version(Variable)
            msg.reply("Version : " + version);
         }else{
             //saying that they dont have a valid command
             msg.reply('Please do a valid command.(Examples : version, Nuff)');
            }
        break;
        
        //Clears messages, as long as they are less then fourteen days old, and no more than 100
        case 'clear' :
            if(msg.author.username != 'Puppy681Nuff'){
                msg.reply('you do not have permission to do that');    //telling them they dont have permission
            }else{
                if(!args[1]) {
                    return msg.reply('please define a second argument');  //saying that they dont have a second argument
                } else{
                    msg.channel.bulkDelete(args[1]);        // Deletes messages in bulk
                }
            }      
         break;
         
         case 'embed' :
           
         //sends an embed about the sender 
         if(args[1] === 'user'){
            const embed = new Discord.MessageEmbed()
            .setTitle('User Information')                   //The title
            .addField('Username', msg.author.username)      //Sends their username
            .setThumbnail(msg.author.avatarURL());          //Uses their profile picture for the thumbnaik
            msg.channel.send(embed);                        //sends the embed
           
            //sends an embed about my channels
           } else if(args[1] === 'channels')
           {
               const creatorembed= new Discord.MessageEmbed()
               .setTitle('Websites and channels')
               .addField('Main channel',  'https://www.youtube.com/channel/UCF2rI8Xnkfsj267xUt9p_3w')   //both of my channels
               .addField('Second channel', 'https://www.youtube.com/channel/UC_SvXTR_1b5HZdf-FqIoOYQ')
               .setColor('0x0002FF')
               .setThumbnail('https://cdn.discordapp.com/avatars/678788394519756800/344dc4b9c156a89292fc22f8b99b8d21.webp') // My profile picture as a thumbnail
               msg.channel.send(creatorembed);           //sends the embed
               
           }
           break;

           //time mutes
           case 'mute':
               if(msg.author.username == 'Puppy681Nuff' || msg.author.username == 'Sub-Soldier' || msg.author.username == '𝐝ㄚï𝟆გ⏤ï𝟆یï𝐝𝖊 ッ'){
                var person  = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]));
                if(!person) return  msg.reply("I CANT FIND THE USER " + person)
     
                let mainrole = msg.guild.roles.cache.find(role => role.name === "Users");
                let role = msg.guild.roles.cache.find(role => role.name === "Mute");
               
     
                if(!role) return msg.reply("Couldn't find the mute role.")
     
     
                let time = args[2];
                if(!time){
                    return msg.reply("You didnt specify a time!");
                }
     
                person.roles.remove(mainrole.id)
                person.roles.add(role.id);
     
     
                msg.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)
     
                setTimeout(function(){
                   
                    person.roles.add(mainrole.id)
                    person.roles.remove(role.id);
                    console.log(role.id);
                    msg.channel.send(`@${person.user.tag} has been unmuted.`)
                }, ms(time));
            } else{ 
           msg.reply('You do not have permission to do that.')
        }
            break;

            //unmutes
            case 'unmute' : 
            if(msg.author.username == 'Puppy681Nuff'){
            var person  = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]));
            if(!person) return  msg.reply("I CANT FIND THE USER " + person)
 
            let mainrole = msg.guild.roles.cache.find(role => role.name === "Users");
            let role = msg.guild.roles.cache.find(role => role.name === "Mute");
           
 
            if(!role) return msg.reply("Couldn't find the mute role.")
               
                person.roles.add(mainrole.id)
                person.roles.remove(role.id);
                console.log(role.id);
                msg.channel.send(`@${person.user.tag} has been unmuted.`)
                break;
            }else{
                msg.reply('You do not have the permission to do that.')
            }

            //sends a message in the dms
            case 'help':
                    const Embed = new Discord.MessageEmbed()
                    .setTitle("Helper Embed")
                    .setColor(0xFF0000)
                    .setDescription("Make sure to use the woof?commands to get access to the commands");
         
                    msg.author.send(Embed);
                break;

                //talks about the commands
            case 'commands' : 
            const commandsembed= new Discord.MessageEmbed()
            .setTitle('Commands')
            .addField('Nuff',  'I reply woof to you!')
            .addField('info', 'Gives information about me, the bot')
            .addField('clear','only available to the creator of the group, but ot bulk deletes up to 100 messages')
            .addField('website', 'gives my main youtube channel, and my coding channel.')
            .addField('embed','Use embed user, or embed channel. Sends an embed about stuff.')
            .addField('mute', 'only available to the group creator, it time mutes someone, and makes it so they cannnot see the channels')
            .addField('Unmute','Unmutes a person, only available to the creator of the group')
            .addField('Prefix', 'prefix is ' + PREFIX)
            .setColor('0x0002FF')
            .setThumbnail('https://cdn.discordapp.com/avatars/678788394519756800/344dc4b9c156a89292fc22f8b99b8d21.webp')
            msg.channel.send(commandsembed);
            break;
            case 'kick' : 
                if(msg.author.username === 'Puppy681Nuff')
                {

                    const user = msg.mentions.users.first();

                    if(user){
                        const member = msg.mentions.members.first();
                        if(member){
                            member.kick('you were kicked by a administrator').then(() =>{
                            msg.reply(`${user.tag} has been kicked.`);
                            }).catch(err =>{
                                msg.reply('I was inable to kick the member.');
                                console.log(err);
                            });
                        }else{
                            msg.reply(`${user.tag} isn \'t the server`);
                        }
                    }else{
                        msg.reply(`You need to specify a person.`)
                    }
                } else{
                    msg.reply('You do not have the permission to do that')
                }
            break;
            //bans the user
            case 'Ban' : 
            //checks if you are allowed to do the command
                if(msg.author.username === 'Puppy681Nuff')
                {
                    //seeing who was metioned first
                    const user = msg.mentions.users.first();

                    //checking if the user exists
                    if(user){

                        const member = msg.mentions.members.first();
                        if(member){
                            member.ban({reason: 'You were baned by an administrator.'}).then(() =>{
                            msg.reply(`${user.tag} has been banned.`);
                            }).catch(err =>{
                                msg.reply('I was unable to ban the member.');
                                console.log(err);
                            });
                        }else{
                            msg.reply(`${user.tag} isn \'t the server`);
                        }
                    }else{
                        msg.reply(`You need to specify a person.`)
                    }
                } else{
                    msg.reply('You do not have the permission to do that')
                }
            break;
            case 'send'  :
                const Attachment = new MessageAttachment('https://i.kym-cdn.com/entries/icons/facebook/000/001/304/n00b.jpg');
                msg.channel.send(msg.author, Attachment);
            break;
            case 'sendthing' :
                const Attachment2 = new MessageAttachment('./Thing.png')
                msg.channel.send(msg.author, Attachment2);
            break;
            case 'rules' :
                const Attachment3 = new MessageAttachment('./Rules.txt');
                msg.channel.send(msg.author, Attachment3);
            break;

            case 'trash' : 
            const trashsembed= new Discord.MessageEmbed()
            .setTitle('Who you are.')
            .addField('You', ' Are the definition of trash')
            .addField( 'You are',' literal garbage. ')
            .setColor('0x0002FF')
            .setThumbnail('https://img.buzzfeed.com/buzzfeed-static/static/2015-11/10/14/campaign_images/webdr05/what-piece-of-human-garbage-are-you-2-3019-1447185573-9_dblbig.jpg')
            msg.channel.send(trashsembed);
            break;

        }
    }   
)

//greeting
bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return 'failed';

    channel.send(`welcome to our sever, ${member}, Please leave your leash on the hooks.`)
})

bot.login(token);

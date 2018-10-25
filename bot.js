const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message',message =>{
    var prefix = "-";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://media.discordapp.net/attachments/477570106755383307/479229377037598720/22713057_151850495552450_709700562_o.jpg?width=201&height=201")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });//t

client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('Epic Bot',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});//t

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" هلا !!");
    }
});//t\

client.on('message', message => {

    if (message.content === "-lock") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "-unlock") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});//t

client.on("ready", async () => {
    if(client.users.size > 1) {
        client.user.setActivity(`-help | ${client.users.size} Player`);
        console.log(`${client.user.username} With ${client.users.size} Player`)
    } else {
        client.user.setActivity(`-help | ${client.users.size} Player`);
        console.log(`${client.user.username} -help | ${client.users.size} Player`)
    }
    client.user.setStatus("online");
});

client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`-help | ${client.users.size} Player`);
    } else {
        client.user.setActivity(`-help | ${client.users.size} Player`);
    }
});

client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(client.users.size > 1) {
        client.user.setActivity(`-help | ${client.users.size} Player`);
    } else {
        client.user.setActivity(`-help | ${client.users.size} Player`);
    }
});

client.on("message", async () => {
  
})//t

client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});//t

client.on("message", msg => {
  if(msg.content === '-' + "profile") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});//t

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-admin") {
         if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(`
         
         **لست من المشرفين لن يتم ارسال الرسالة إليك**
         
         
         `);
         message.channel.send('**لقد تم ارسال رسالة المساعدة في الرسائل الخاصة**');
            
    
         


 message.author.sendMessage(`
 **

╔[❖══════════════════════❖]╗
       اوامر المشرفين
╚[❖══════════════════════❖]╝

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $kick <mention > ➾ لطرد الأعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $clear ➾ لمسح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ $mute < mention > ➾ لإعطاء ميوت للإعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $unmute <mention> ➾ لفك الميوت عن الأعضاء
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ $bc <message> ➾ لإرسال رسالة جماعية
 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $closeroms <message> ➾ لإغلاق الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
 ❖ $openroms <message> ➾ لفتح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $server <message> ➾ لمعرفة نبذه عن السيرفر
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $warn <message> ➾ لإعطاء انذار لأحد الأعضاء
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 ❖ $clear <message> ➾ لمسح الشات
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

`);

    }
});//t

client.login(process.env.BOT_TOKEN);

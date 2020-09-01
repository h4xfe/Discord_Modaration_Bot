//-Değişkenler-
const Discord = require("discord.js");
const chalk = require("chalk");
const Advanced = require('discordjs-advanced');

const client = new Advanced.Client({
    token: "NDk1Njg1NTk3NDU3ODA5NDA4.W6_ZLw.Exp52w7_cZENU-JSr42b_Mw9Or4",
    prefix: "c!", 
    sahip: ["453242844623273985"], 
    komutDosya: "komutlar",
    veritabanı : {
       dosya:"database.json"
    },
    varsayılanKomutlar: ['yardım'],
    everyoneKapat: false
});  

client.eventYükle("olaylar");

client.kategoriYükle([ 
    ['genel', 'Genel komutlar']
]);

//-Bot hazır mesajı-
var log =  chalk.red("Bot başarı ile giriş yaptı.")
var log01 = chalk.bold.yellow("Bot başarı ile giriş yaptı.")
    

client.on("ready",() => {
 console.log(log)
 console.log(log01)
});

var prefix = "c!";
var message;
var server;
var channel;
client.on("message", message => {
  
if(message.content.toLowerCase() ==="kaşar"){
  message.react("🧀")
  setTimeout(function (){
    message.react("🧀")
  },1*2000)
  message.channel.send("<@290170789670551552> Sana seslendiler bak la").then(message => { 
    message.react("🧀")
  })
}
  
if(message.content.toLowerCase() === "selam") {
	message.react("😂")
	setTimeout(function () {
           message.react("😃")
		},1 * 2000)
	message.channel.send("Aleyküm selam.").then(message => {
      message.react("😂")
	})
}
 /*
  if(message.content.toLowerCase() === prefix + "rain") {
     message.guild.createRole({
            name: 'Rainbow',
            color: 'Pink'});
    message.channel.send("Rol Açıldı. ").then(message => {
      message.react("😃")
      })
  }
  
  if(message.content.toLowerCase() === "aysıla") {
	message.react("🤦")
	setTimeout(function () {
           message.react("🤦")
		},1 * 2000)
	message.channel.send("<@710202839154295107> <== Seni çağırıyorlar bakar mısın? ").then(message => {
      message.react("🤦")
	})
}*/

  //if(message.content.toLowerCase() === prefix + "gg") {
  //message.react("😃")
  //   for(channel = 0; channel < 1; channel++) {
   // message.guild.createChannel('Ağlama Odası', 'voice');
   // message.guild.createChannel('Ağlama Odası', 'channel')
  //};
    //message.channel.send("Rol Açıldı. ").then(message => {
      //})
  //}
})


client.giris();





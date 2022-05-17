//-Değişkenler-
const Discord = require("discord.js");
const chalk = require("chalk");
const Advanced = require('discordjs-advanced');

const client = new Advanced.Client({
    token: process.env.token,
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
  
if(message.content.toLowerCase() === "selam") {
	message.react("😂")
	setTimeout(function () {
           message.react("😃")
		},1 * 2000)
	message.channel.send("Aleyküm selam.").then(message => {
      message.react("😂")
	})
}
 
  if(message.content.toLowerCase() === prefix + "rain") {
     message.guild.createRole({
            name: 'Rainbow',
            color: 'Pink'});
    message.channel.send("Rol Açıldı. ").then(message => {
      message.react("😃")
      })
  }
  
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





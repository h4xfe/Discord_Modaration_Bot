  const Discord = require("discord.js");

module.exports = {
    komut: "rol-al", 
    açıklama: "Herhangi bir kişinin rolünü alırsınız.",
    kategori: "genel", 
    alternatifler: ['rol-al'],
    kullanım: "!rol-al", 
    yetki: "MANAGE_GUILD",
    args : [
{
    anahtar:"rolalinacakkisi",
    soru:"Hangi kişiden rol almak istersiniz?",
    tip:"kullanici"
},
{
   anahtar:"alinacakrol",
   soru:"Bu kişiden hangi rol alacaksınız?",
   tip:"rol"
}
]
};

module.exports.baslat = (client,message, args) => {

if(!message.guild) {
    return;
}

if(message.author.bot === true) {
    return;
}
//tanımlamları
var kisi = args.rolalinacakkisi
var rol = args.alinacakrol
var rolID = rol.id;

if(!message.guild.member(client.user).hasPermission("MANAGE_GUILD")) 
return message.channel.send("Lütfen rol vermem veya almam için bana `Rolleri yönet` yetkisini veriniz.")

//rol verme kısmı
message.guild.member(kisi).removeRole(rolID)
message.channel.send(`Başarı ile **${kisi.username}** adlı üyeye **${rol.name}** adlı rol alındı.`)


}
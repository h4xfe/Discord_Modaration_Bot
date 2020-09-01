const Discord = require('discord.js');

module.exports = {
  komut: "reboot", 
    açıklama: 'Botu yeniden başlatır.',
  kategori: "genel", 
  alternatifler: ['rol-al'],
  kullanım: "!rol-al", 
  yetki:"MANAGE_GUILD",

  
};

module.exports.baslat = (client, message, args) => {
	
    message.channel.send(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};


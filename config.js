// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/ECeHsVtDpNF7NgzDLMAzcM'
gc2 = 'https://chat.whatsapp.com/ECeHsVtDpNF7NgzDLMAzcM'
gc3 = 'https://chat.whatsapp.com/ECeHsVtDpNF7NgzDLMAzcM'
global.linkGC = ['https://chat.whatsapp.com/ECeHsVtDpNF7NgzDLMAzcM', ''] // ganti jadi group lu
global.owner = ['6285853570297','6285853570297'] // Put your number here //owner eval
global.kontak = ['6285853570297','6285853570297'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6285853570297','6285853570297','6285853570297'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'mursid.st'
namagithub = 'Botwa021'
kasihcaption = `Instagram.com/mursid.st`
namakontak1 = '𝙼𝚞𝚛𝚜𝚒𝚍 𝙱𝙾𝚃'
namakontak2 = '𝙼𝚞𝚛𝚜𝚒𝚍'

//kasihcaption = `Instagram.com/mursid.st`

// Sticker WM
global.packname = '【﻿ＳＡＩＦＵＬ】' // ganti aja
global.author = 'BOT-TZY' // ganti aja

//yyy
bc = '【﻿ＳＡＩＦＵＬ】' //мυяѕι∂ Broadcast
footer = `\n© _*【﻿ＳＡＩＦＵＬ】*_`
namabot = `WhatsApp Bot`
namalu = '【﻿ＳＡＩＦＵＬ】'


// 
wait = '_*Loading...*_'
global.wait = '_*Loading...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/ECeHsVtDpNF7NgzDLMAzcM'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error kak*_'

global.image = "https://telegra.ph/file/31701c03ffd465963a2cf.jpg"

// Ubah saja SC dari MursidXzy
global.image = 'https://telegra.ph/file/31701c03ffd465963a2cf.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

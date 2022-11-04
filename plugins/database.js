import fs from 'fs'
import moment from 'moment-timezone'

let handler = async (m, { usedPrefix, command, conn, text }) => {
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)

let flaaa2 = [
'https://telegra.ph/file/ae12768926b9c1c35c790.jpg',
'https://telegra.ph/file/1bf881780ed80accd4eaa.jpg',
'https://telegra.ph/file/2a5992cbc06febb860957.jpg',
'https://telegra.ph/file/1b453cc51dcaeee357184.jpg',
'https://telegra.ph/file/c9b467d38ac26da58c5b2.jpg']
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*Database saat ini ${totalreg} user*\n*Registrasi saat ini ${rtotalreg} user*`
    await /*conn.sendButtonLoc(m.chat, await(await require('node-fetch')(fla + `${command}`)).buffer(), kon, wm, 'Menu', usedPrefix + 'menu', m)*/
    conn.sendButtonImg(m.chat, `${pickRandom(flaaa2)}` + `*Database saat ini ${totalreg} user*\n*Registrasi saat ini ${rtotalreg} user*`, ' ', `${bottime}`,'Speed', `${usedPrefix}speed`, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://youtube.com/c/ahmadstoreeee',
    mediaType: 2, 
    description: sgc,
    title: "Jᴀɴɢᴀɴ Lᴜᴘᴀ Mᴀɴᴅɪ!!",
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
handler.help = ['user']
handler.tags = ['info']
handler.command = /^(pengguna|(jumlah)?database|user)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

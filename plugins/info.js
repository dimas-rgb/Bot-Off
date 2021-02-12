let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Drawl Nag
Script: @Nurotomo
Github: 
https://github.com/Arya274/Arya-BOT3

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram:---
➥ YouTube:---

*Thanks To :*
Nurotomo
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ SmartFren: ---
╠➥ Tsel: ---
╠➥ Indosat: 0858-0953-5507
║>Request? Wa.me/6285809535507
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


let handler = function (m) {
  // this.sendContact(m.chat, '6285809535507', 'Dims', m)
  this.sendContact(m.chat, '6285809535507', 'Owner Ganteng', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083890056398]
│ • Indosat [085809535507]
│ • Gopay [----]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285809535507
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa indosat"
3.)Dan terus masukkan nomor kami 085809535507
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

/*
⚠️ PERINGATAN ⚠️  
Script bot WhatsApp viera BOT ini dibuat oleh Khalid untuk keperluan pribadi dan pembelajaran.  
Dilarang keras untuk memperjualbelikan, mendistribusikan ulang, atau mengklaim sebagai milik sendiri.  

Hak Cipta © 2024 Khalid & Mora AI  
*/

const fs = require('fs')
const chalk = require('chalk')

global.ytname = 'YouTube : https://www.youtube.com/@hiraazxd'
global.socialm = 'GitHub: Tidak diketahui ❌'
global.location = '11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Jepang'

global.botName = 'vieraBOT'
global.ownerNumber = '6285655548594'
global.ownerName = 'hiraaXz'
global.website = 'https://whatsapp.com/channel/0029Vb1Pxy3AjPXM1QtCES39'
global.wagc = 'https://whatsapp.com/channel/0029Vb1Pxy3AjPXM1QtCES39'
global.packname = 'vieraBOT'
global.author = 'HiraaXz'
global.creator = '6283119115977@s.whatsapp.net'
global.premium = ['6283119115977']
global.hituet = 0
global.prefa = ['','.','/'];

global.saluran = '120363385647535187@newsletter'
global.saluranName = 'HiraaXz ( Butuh kamu )'
global.sessionName = 'session'

global.typereply = 'v4'
global.autoblocknumber = '92'
global.antiforeignnumber = '91'
global.welcome = false;
global.anticall = false;
global.autoswview = false;
global.adminevent = false;
global.groupevent = false;

global.limit = {
	free: 30,
	premium: 9999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Mora harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Sudah selesai! ✅✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, batas penggunaan Kakak udah habis... 😢',
	noCmd: 'Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗'
}

global.pathimg = fs.readFileSync('./media/favicon.png');
global.thumb = fs.readFileSync('./media/MoraAI.png');
global.thumbUrl = 'https://files.catbox.moe/1mzhhx.jpg';
global.videoMenu = fs.readFileSync('./media/vidmenu.mp4');

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
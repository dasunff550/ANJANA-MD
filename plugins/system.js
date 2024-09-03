const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
  pattern: "system",
  alias:["status","botinfo"],
  desc: "Check uptime,ram usage and more",
  category: "main",
  filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*Uptime:*  ${runtime(process.uptime())}
*Ram usage 📟:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*HostName 👤:* ${os.hostname()}
*Owner ©️:* 𝙺𝙸𝙽𝙶 𝙰𝙽𝙹𝙰𝙽𝙰 & 𝙳𝙰𝚂𝚄𝙽 𝙼𝙰𝚇
`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)

}
})

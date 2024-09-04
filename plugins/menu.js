const {readEnv} = require('../lab/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: " Get Bot Command Panel",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }


let madeMenu = `* 👋 Hello ${pushname}*
> *DOWNLOAD COMMANDS* ⬇️
  
 ${menu.download}

  
 > *MAIN COMMANDS* 🌟
  
   ${menu.main}

  
> *GROUP COMMANDS* ⚡
  
${menu.group}


> *OWNER COMMAND* 🛜

  ${menu.owner}


  > *CONVERT COMMAND* 🔁

  ${menu.convert}


> *SEARCH COMMAND* 🔍

  ${menu.convert}




 POWERD BY 𝙳𝙰𝚂𝚄𝙽 𝙼𝙰𝚇 💚
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek}}]


}catch(e){
console.log(e)
reply(`${e}`)
  

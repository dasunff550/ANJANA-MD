const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/1636c1eb652c31db7c8a2.jpg",
ALIVE_MSG: process.env.ALIVE_MSG ||"👋𝗛𝗶⚡ 𝗕𝗥𝗢,


💀𝐈 𝐚𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰 💀


😈◦ *ɴᴀᴍᴇ ʙᴏᴛ* : 𝙰𝙽𝙹𝙰𝙽𝙰-𝙼𝙳 ⚡
😈◦ *ᴄʀᴇᴀᴛᴏʀ* : 𝙳𝙰𝚂𝚄𝙽 𝙼𝙰𝚇⚡
😈◦ *ᴠᴇʀsɪᴏɴs* : 1.0.0 
😈◦ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : 𝙿𝚈𝚃𝙷𝙾𝙽 ᴘʟᴜɢɪɴs⚡

> ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱʏꜱᴛᴇᴍ *(ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ)* ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ *ᴡʜᴀᴛꜱᴀᴘᴘ.🪀*

> ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ


*🖕𝕋𝕪𝕡𝕖 .𝕞𝕖𝕟𝕦 𝕋𝕠 𝔾𝕖𝕥 𝔹𝕠𝕥 𝕌𝕤𝕖𝕣 𝕄𝕖𝕟𝕦 🫶*

> *🖕𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©️ 𝙰𝙽𝙹𝙰𝙽𝙰-𝙼𝙳 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻
> 𝙹𝙾𝙸𝙽 𝚄𝚂 - https://whatsapp.com/channel/0029ValIDQ6FCCob9meD643x"
};

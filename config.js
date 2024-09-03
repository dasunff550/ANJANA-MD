const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/1636c1eb652c31db7c8a2.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "👋𝗛𝗶⚡ 𝗕𝗥𝗢,I AM ALIVE NOW",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};

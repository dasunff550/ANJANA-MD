const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "Download songs",
    category: "Download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give Me URL or TITTLE")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
⚡ *ANJANA-MD SONG DOWNLOADER* 🎧

tittle:${data.tittle}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY 🍂👻𝘿𝘼𝙎𝙐𝙉 𝙈𝘼𝙓 🥵🍁`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc,{quoted:mek});
    
//download audio

let down = await fg.yta(url)
let downloadURL = down.dl_url

//send audio messege
await conn.sendMessege(from,{audio: {url:downloadURL,mimetype:"audio/mpeg"},{quoted:mek})

}catch(e){
console.log(e)
 reply(`${e}`)
}
})

    

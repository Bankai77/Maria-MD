const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "917864093289"],
global.ownername = process.env.OWNER_NAME || "✧Ａ𝖗ƙ𖤬_✨",
global.ytname = "YT: null"
global.socialm = "GitHub: Bankai77"
global.location = "India"

global.botname = process.env.BOTNAME || "*✧･ﾟ:✨:･ﾟ:Marin_Kitagawa:･ﾟ✨:･ﾟ✧*",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "*꧁☆★_𝔹𝕒𝕟𝕜𝕒𝕚𝟟𝟟_★☆꧂*",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "*Ａ𝖗ƙ𖤬✨*",
//console view/theme
global.themeemoji = '🧩'
global.wm = "Arka botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/LHfJmKoYVJp1gDX58P55CY'

//custom prefix
global.prefa = process.env.PREFIX || "!",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "true", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🥰 *Here you go, darling!* ',
    prem: '🥰 *My darling, this feature is reserved for premium users only*',
    admin: '🥰 *Gomen`nasai*, only *Group Admins* can use this command, *Baka*!',
    botAdmin: '🥰 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '🥰 Only my *Owner* can use this command, *Baka!*',
    group: '🥰 Sweetheart, this command is only made for *Groups*, Baka!',
    private: '🥰 *Darling*, this feature is exclusively for *private chats*, *Baka!*',
    wait: '🥰 *Chotto Matte...* ',    
    error: '🥺 *Oh darling, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

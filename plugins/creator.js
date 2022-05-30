const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{


"displayName": "Fachri",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:CREATOR•FACHRIBOTZ\nitem1.TEL;waid=6285713041886:6285713041886\nitem1.X-ABLabel:📍 Creator\nitem2.EMAIL;type=INTERNET:saefulfachri18@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:bit.ly/sfdesignblogspot\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia 🇮🇩\nitem5.X-ABLabel:───────[ FACHRIBOTZ ]───────\nEND:VCARD"
  }, {
  }, {
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

module.exports = handler

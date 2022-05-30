const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{


    "displayName": "Fachri",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:OWNER•SLIME\nitem1.TEL;waid=6285713041886:6285713041886\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:saefulfachri18@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:bit.ly/sfdesignblogspot\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;Indonesia 🇮🇩;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia 🇲🇨\nitem5.X-ABLabel:───────[ FachriBotz ]───────\nEND:VCARD"
  }, {
    "displayName": "Whatsapp",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Whatsapp\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:📍 Whatsapp\nitem2.EMAIL;type=INTERNET:Whatsapp@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://faq.whatsapp.com/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;⛩️ Whatsapp;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:📞 Official Bot Whatsapp\nitem5.X-ABLabel:───────[ By WhatsApp ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler

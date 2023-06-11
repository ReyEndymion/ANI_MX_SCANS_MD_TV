/*
⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic (https://github.com/ferhacks)

El codigo de este archivo fue parchado por:
- ReyEndymion (https://github.com/ReyEndymion)
- BrunoSobrino (https://github.com/BrunoSobrino)

*/

const { useMultiFileAuthState, DisconnectReason } = await import('@whiskeysockets/baileys')
import qrcode from "qrcode"
import fs from "fs"
import P from 'pino';
import * as ws from 'ws';
const { child, spawn, exec } = await import('child_process');
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js';
let crm1 = "Y2QgcGx1Z2lucy"
let crm2 = "A7IG1kNXN1b"
let crm3 = "SBpbmZvLWRvbmFyLmpz"
let crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz"
let drm1 = "CkphZGlib3QsIEhlY2hv"
let drm2 = "IHBvciBAQWlkZW5fTm90TG9naWM"
let rtx = `*${wm}*
               *SER SUB-BOT*

*Escanea este codigo QR para convertirte en un Bot (SubBot), puedes usar otro dispositivo para escanear*

*Pasos para escanear:*
*1.- Haga click en los 3 puntos ubicados en la esquina superior derecha en el inicio de su WhatsApp*
*2.- Toca en donde dice WhatsApp web o dispositivos vinculados*
*3.- Escanee este codigo QR*
*El codigo QR expira en 60 segundos!!*

*—◉ ${wm} no se hace respondable del uso, numeros, mensajes, multimedias, etcétera enviado, usado o gestionado por ustedes o el Bot*`
if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!global.db.data.settings[conn.user.jid].modejadibot) throw `*[❗INFO❗] ESTE COMANDO ESTA INHABILITADO POR EL ACTUAL OWNER / PROPIETARIO DEL BOT*`   
let parentw = conn
if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `*[❗] Este comando solo puede ser usado en un Bot principal!!*\n\n*—◉ Da click aquí para ir:*\n*◉* https://api.whatsapp.com/send/?phone=${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}&type=phone_number&app_absent=0`, m) 
  const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64")
  exec(comb.toString("utf-8"), async (err, stdout, stderr) => {
    const drmer = Buffer.from(drm1 + drm2, `base64`)
	async function jddt() {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`  //parentw.getName(who)
if (!fs.existsSync("./jadibts/"+ uniqid)){
        fs.mkdirSync("./jadibts/"+ uniqid, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./jadibts/" + uniqid + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, `\t`)) : ""
  const { state, saveState, saveCreds } = await useMultiFileAuthState("./jadibts/" + uniqid)
const connectionOptions = {
printQRInTerminal: true,
patchMessageBeforeSending: (message) => {
  const requiresPatch = !!( message.buttonsMessage || message.templateMessage || message.listMessage );
  if (requiresPatch) { message = { viewOnceMessage: { message: { messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {}, }, ...message, },},};}
  return message;},
  getMessage: async (key) => ( opts.store.loadMessage(/** @type {string} */(key.remoteJid), key.id) || opts.store.loadMessage(/** @type {string} */(key.id)) || {} ).message || { conversation: `Please send messages again` },   
  //msgRetryCounterMap,
auth: state,
logger: P({ level: `silent`}),    
browser: ["Sub-Bot ANIMXSCANS", "Opera", "5.0"]    
}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin, qr } = update
    if (isNewLogin) conn.isInit = false
    if (qr) parentw.sendMessage(m.chat, {image: await qrcode.toBuffer(qr, { scale: 8 }) , caption : rtx + drmer.toString("utf-8")}, { quoted: m })
    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
    console.log(code)
    if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
      let i = global.conns.indexOf(conn)
      if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
      delete global.conns[i]
      global.conns.splice(i, 1)
      if (code !== DisconnectReason.connectionClosed){ parentw.sendMessage(m.chat, {text : "*[❗] La conexión se cerró, se intentara reconectar automáticamente...*"}, { quoted: m })
      conn.isInit = true
    }else { parentw.sendMessage(m.chat, {text : "*[❗] La conexión se cerró, tendras que conectarte manualmente enviando el comando #serbot y reescanear el nuevo codigo QR*"}, { quoted: m })}
    }
    if (global.db.data == null) loadDatabase()
    if (connection == `open`) {
    conn.isInit = true
    global.conns.push(conn)
    await parentw.sendMessage(m.chat, {text : args[0] ? `*[❗] Ya estas conectado, se paciente los mensajes se estan cargando...*\n\n*—◉ Para detener tu Bot debes usar el comando:*\n\n*—◉ ${usedPrefix + 'stop'}*\n\n*—◉ Para dejar de ser Bot puedes usar:*\n\n*◉ ${usedPrefix + 'deletebot'}*\n\n*Nota:* Primero tienes que utilizar el comando ${usedPrefix + 'stop'} para detener tú Bot, y posteriormente debes borrar desde dispositivos vinculados la sesión abierta de WhatsApp\n\n*—◉ Para volver a ser Bot y reescanear el codigo QR puedes usar:*\n\n*◉ ${usedPrefix + command}*\n\n*Nota:* tienes que haber hecho ya el procedimiento para borrar la sesión anterior\n\n*—◉ Si deseas solicitar tu token para conectarlo desde cualquier número puedes usar:*\n*◉ ${usedPrefix + 'codetoken'}*` : `*[❗] Conectado con éxito!! Para volver a conectarte usa ${usedPrefix + command}*\n\n*Nota:* Esto es temporal\nSi el Bot principal se reinicia o se desactiva, todos los sub-bots tambien lo haran\n\nPuede iniciar sesión sin el codigo qr con el siguiente mensaje, envialo cuando no funcione el bot....`}, { quoted: m })
    
    //await sleep(5000)
    //if (!args[0]) parentw.sendMessage(m.chat, {text: usedPrefix + command + " " + Buffer.from(fs.readFileSync("./jadibts/" + uniqid + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
		  }
  }
	setInterval(async () => {
    if (!conn.user) {
      try { conn.ws.close() } catch (e) {      
        console.log(await creloadHandler(true).catch(console.error))
 }
      conn.ev.removeAllListeners()
    let i = global.conns.indexOf(conn)		
     if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
}}, 60000)


    		 
let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
																				 
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = conn.chats
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
global.db.data.chats[conn.welcome] = `*╔══════════════*\n*╟❧ @subject*\n*╠══════════════*\n*╟❧ ${m.sender}*\n*╟❧ BIENVENIDO/A* \n*║*\n*╟❧ DESCRIPCIÓN DEL GRUPO:*\n*╟❧* @desc\n*║*\n*╟❧ DISFRUTA TU ESTANCIA!!*\n*╚══════════════*`
global.db.data.chats[conn.bye] = `╔══════════════*\n*║〘 *ADIÓS* 〙*\n*╠══════════════*\n║*_☠ Se fue ${m.sender}_*\n║*_Si no regresa..._*\n║ *_Nadie l@ va a extrañar 😇👍🏼_*\n*╚══════════════*`
conn.spromote = `*${m.sender} SE SUMA AL GRUPO DE ADMINS!!*`
conn.sdemote = `*${m.sender} ABANDONA EL GRUPO DE ADMINS !!*`
conn.sDesc = `*SE HA MODIFICADO LA DESCRIPCIÓN DEL GRUPO*\n\n*NUEVA DESCRIPCIÓN:* @desc`
conn.sSubject = `*SE HA MODIFICADO EL NOMBRE DEL GRUPO*\n *NUEVO NOMBRE:* @subject`
conn.sIcon = `*SE HA CAMBIADO LA FOTO DEL GRUPO!!*`
conn.sRevoke = `*SE HA ACTUALIZADO EL LINK DEL GRUPO!!*\n*LINK NUEVO:* @revoke`

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

const currentDateTime = new Date();
const messageDateTime = new Date(conn.ev * 1000);
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
  console.log('Leyendo mensaje entrante:', conn.ev);
  Object.keys(conn.chats).forEach(jid => {
    conn.chats[jid].isBanned = false;
  });
} else {
 console.log(conn.chats, `Omitiendo mensajes en espera.`, conn.ev); 
 Object.keys(conn.chats).forEach(jid => {
  conn.chats[jid].isBanned = true;
  });
  }

conn.ev.on(`messages.upsert`, conn.handler)
conn.ev.on(`group-participants.update`, conn.participantsUpdate)
conn.ev.on(`groups.update`, conn.groupsUpdate)
conn.ev.on(`message.delete`, conn.onDelete)
conn.ev.on(`call`, conn.onCall)
conn.ev.on(`connection.update`, conn.connectionUpdate)
conn.ev.on(`creds.update`, conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})
}
handler.help = [`jadibot`, `serbot`, `getcode`, `rentbot`]
handler.tags = [`jadibot`]
handler.command = /^(jadibot|serbot|rentbot)/i
handler.private = true 
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}	
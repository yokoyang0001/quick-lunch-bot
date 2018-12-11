import axios from 'axios'
import messageData from './replyMessages'

exports.handler = async function(event, context, callback) {
  const body = JSON.parse(event.body)
  const targetEvent = body.events[0]
  console.log(JSON.stringify(targetEvent, null, 4))

  if (targetEvent.type !== "message") {
    callback({}, null)
  }

  const matchResult = targetEvent.message.text.match(/[\d+]|スタート/)
  if (!matchResult) {
    callback({}, null)
  }

  let messages;
  if (targetEvent.message.text === "4") {
    const rand = Math.floor(Math.random() * 6);
    const shops = [
      {
        type: 'text',
        text: '「つるとんたん」にしよか',
      },
      {
        type: 'text',
        text: 'KITTEのホルモンうまかったすね',
      },
      {
        type: 'text',
        text: 'やまやの明太子チャレンジすっか',
      },
      {
        type: 'text',
        text: 'やっぱトリドリ？',
      },
      {
        type: 'text',
        text: '赤のれん(ラーメン)行ってみっか',
      },
      {
        type: 'text',
        text: 'あのシャレオツなカレー行きますか',
      },
    ];
    messages = [shops[rand]];
  } else {
    const messageKey = matchResult[0]
    messages = [messageData[messageKey]];
  }
  

  
  const data = {
    replyToken: targetEvent.replyToken,
    messages
  }

  await axios.post('https://api.line.me/v2/bot/message/reply', data, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CHANNEL_TOKEN}`
    }
  })

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(event)
  })
}
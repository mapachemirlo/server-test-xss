const readLine = require('readline')
const webSocket = require('ws')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT_WS || 9500

const web_soc = new webSocket.Server({ port })

console.log(`Server Web Socket listening on port ${port}`)

try {

    web_soc.on('connection', w_s => {
        w_s.on('message', message => console.log('received: %s', message))

        const r_l = readLine.createInterface({
            input: process.stdin,
            output: process.stdout,
        })

        r_l.on('line', line => w_s.send(line))
    })


} catch (error) {
    console.log(error)
}












// const WebSocket = require('ws')
// const readline = require('readline')
// const dotenv = require('dotenv')

// dotenv.config()

// const port = process.env.PORT_WS

// const wss = new WebSocket.Server({ port })

// console.log(`listening on localhost port ${port}`)

// try {
//     wss.on('connection', ws => {
//         ws.on('message', message => console.log('received: %s', message))

//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout,
//             //terminal: false
//         })

//         // read input from the terminal and send it back as the response
//         rl.on('line', line => ws.send(line))
//     })
// } catch (error) {
//     console.log(error)
// }
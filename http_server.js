const http = require('http')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.PORT_HTTP || 9000

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000,
    'Access-Control-Allow-Headers': 'Content-Type'
}

const server = http.createServer((req, res) => {
    try {

        if (req.method === 'OPTIONS') {
            res.writeHead(204, headers)
            res.end()
            return
        }

        if (['GET', 'POST'].indexOf(req.method) > -1) {
            console.log(decodeURIComponent(req.url))
            let body = []
            req.on('data', data => body.push(data)).on('end', () => console.log(Buffer.concat(body).toString()))
            res.writeHead(200, headers)
            res.end('Content OK')
            return
        }

        res.writeHead(405, headers)
        res.end(`${req.method} this request is not allowed.`)
    } catch (error) {
        console.log(error)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
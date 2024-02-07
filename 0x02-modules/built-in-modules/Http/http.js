http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('welcome to the home page')
        res.end()
    }
    else if (req.url === '/about') {
        res.end('okay you are currently in the abouts page')
    }
    else {
        res.end(`<h1>404, this page dose not exit</h1>
        <a href="/"> Go back home </a>
        `)}
})

// 2:04

server.listen(5000)
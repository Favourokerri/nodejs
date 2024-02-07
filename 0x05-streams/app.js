//straem example
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    //text = fs.readFileSync('./content/file.txt');

    filestream = fs.createReadStream('./content/file.txt', 'utf-8')

    filestream.on('open', ()=> {
        filestream.pipe(res)
    })

    filestream.on('error', (error) => {
        console.log('error');
    })
})

server.listen(5000, () => {
    console.log('server listening at port 50000')
})

3:40
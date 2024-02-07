const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url==='/') {
        res.end('home page')
    }

    //BLOCKING CODE!!
    else if (req.url ==='/about') {
        for (i = 0; i < 300; i++) {
            for(k=0; k< 500; k++) {
               console.log('holo')
            }
        }
    }
})

server.listen(5000, ()=> {
    console.log("server listenong at port 5000")
})
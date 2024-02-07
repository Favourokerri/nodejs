// using just http is not efficient as displayed here. thats why we use 
//express
const http = require('http');
const fs = require('fs')


//get homepage
homePage = fs.readFileSync('../navbar/index.html')
css = fs.readFileSync('../navbar/style.css')
js = fs.readFileSync('../navbar/main.js')

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage);
        res.end();
    }

    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>This is the about page</h1>');
        res.end();
    }

    else if (url === '/style.css') {
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(css);
        res.end();
    }

    else if (url === '/main.js') {
        res.writeHead(200, {'content-type': 'text/js'})
        res.write(js);
        res.end();
    }

    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found</h1>');
        res.end();
    }
})

server.listen(5000, () => {
    console.log('server listening at port 5000')
});

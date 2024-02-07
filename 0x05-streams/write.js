const fs = require('fs')

for (i=0; i < 10000; i++) {
    fs.writeFileSync('./content/file.txt', `hello mum${i}\n`, {flag: 'a'});
}

const readfile = fs.readFileSync('./content/file.txt', 'utf8')
console.log(readfile)
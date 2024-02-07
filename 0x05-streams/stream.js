const { error } = require('console');
const fs = require('fs');

const stream = fs.createReadStream('./content/file.txt');

stream.on('data', (result) => {
    console.log(result);
})


stream.on('close', () => {
    console.log('operation completed')
})

stream.on('error', (error) => {
    console.log(error);
})
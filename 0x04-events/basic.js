const EventEmitter = require('events');

const CustomEmitter = new EventEmitter();

CustomEmitter.on('response', ()=> {
    console.log('this is your response')
})

CustomEmitter.emit('request')

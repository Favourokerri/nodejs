const os = require('os')

// get user info
const user = os.userInfo()
console.log(user)

//get sytem uptime
const uptime = os.uptime()

console.log(` sytem has been on for ${uptime} seconds`)


const aboutOs = {
    name: os.type(),
    realse: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(aboutOs)
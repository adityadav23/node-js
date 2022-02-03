
const os = require('os')
//currentUser info
const userInfo = os.userInfo()
 console.log(userInfo)

 //operating system info
const osInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()}

console.log(osInfo)

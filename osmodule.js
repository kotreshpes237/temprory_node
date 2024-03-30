const os=require('os')
 const user=os.userInfo()
 console.log(user)
 console.log(`the system uptime:${os.uptime} seconds`)
 const opin = {
    name:os.type(),
    release:os.release(),
    totmem:os.totalmem(),
    fremem:os.freemem(),
 }
 console.log(opin)
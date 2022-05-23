const fs = require('fs')

fs.readFile('file.txt','utf8', (err,data)=>{
    console.log("ERRORS =>",err)
    console.log("FILE DATA IS",data)
})
const fs = require('fs')

// readFile is used to READ from a File. If FIle not Present then Error is Thrown 
// Error if File not Present - [Error: no such file or directory, open]

fs.readFile('file.txt','utf8', (err,data)=>{
    console.log("ERRORS =>",err)
    console.log("FILE DATA read by readFile IS",data)
})

// SEE THE ORDER OF OUTPUT HERE - Console.log will print first & then readFile

fs.readFile('file.txt', (err,data)=>{
    console.log("ERRORS =>",err)
    console.log("FILE DATA IS",data)
})
// if 'UTF-8' is not given as Parameter then OP will be FILE DATA IS <Buffer 4c 6f 6e 67 20 4c 69 76 65 20 48 72 69 74 68 69 6b 20 30 30 37>       

console.log('Hii I am Javascript')

// THis concept of JAVASCRIPT where console.log is printed above all readFiles 
// [Time Consuming Tasks] is Known as NON BLOCKING IO MODEL

// If You want JavaScript to Be Blocked until we read a file we can use readFileSync

const a = fs.readFileSync('file.txt')
console.log(a)
console.log(a.toString())

console.log('JavaScript has Blocked until readfile Sync Executes')

// we have writeFile & writeFileSync as well 

// writeFile takes 3 Arguements , file path, data to write, callback function which
// will be called once the write operation is successfull

fs.writeFile('file2.txt','THis is a write operation',()=>{
    console.log('write is Successfull')
})

console.log('i am below write file line')

fs.writeFileSync('file3.txt','i m written through writeFileSync')
console.log('hi i am blocked until writeFileSync Completes its Execution')


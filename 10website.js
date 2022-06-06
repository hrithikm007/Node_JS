const res = require('express/lib/response')
const http = require('http')

// lets Create a new HTTP server with Node JS

const port = process.env.PORT || 3000
// if env variable of PORT is not set for us then use 3000
console.log("port is", port)
// whichever port is available for our process take that 

const server = http.createServer((req, resp) => {
    resp.setHeader('Content-Type', 'text/html')
    console.log("Hii i am req.url",req.url)
    // console.log(req)
    if (req.url == '/') {
        req.statusCode = 200;
        resp.end('<h1>This is Hrithik 007</h1>')
    }
    else if (req.url == '/hbm') {
        resp.statusCode = 200;
        resp.end('<h1>this is /hbm</h1>')
    }
    else {
        resp.statusCode = 404;
        resp.end('<h1>PAGE WAS NOT FOUND</h1>')
    }
})

// we must also listen to this then only we will get response

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

// Notice that server.listen takes 2 arguements port & callback function. also note that we used `` instead of '' in console.log so that we can use them as fstrings ${}
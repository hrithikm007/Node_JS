const http = require('http')

// lets Create a new HTTP server with Node JS

const port = process.env.PORT || 3000
// if env variable of PORT is not set for us then use 3000
console.log("port is",port)
// whichever port is available for our process take that 

const server = http.createServer((req,resp) => {
    resp.statusCode = 200;
    console.log(req); // whenever we request to server it will print
  /** Say our URL typed was localhost:3000/zdeals/14302
   * if we want to get /zdeals/14302 then search in the printed output in terminal for /zdeals you will find it in the request 
   * referer: 'http://localhost:3000/zdeals/143502',
   * 'http://localhost:3000/zdeals/143502',
   * url: '/zdeals/143502'
   * 3 Places it had printed these
   */
    resp.setHeader('Content-Type','text/html')
    resp.end('<h1>This is Hrithik 007</h1>')
})

// we must also listen to this then only we will get response

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})

// Notice that server.listen takes 2 arguements port & callback function. also note that we used `` instead of '' in console.log so that we can use them as fstrings ${}
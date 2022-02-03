const http = require('http')

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
        res.end('This is home page')
   }
   if(req.url === '/about'){
       res.end('This is about page')
       
   }

   //Default case:
   res.end(`<h1>Oops!</h1>
   <p>Can't find</p>
   <a href ='/'>Back Home</a>`)
})

server.listen(5000)
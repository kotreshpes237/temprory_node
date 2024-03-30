const http=require('http')
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('its home page')
    }
    if(req.url === '/about'){
        res.end('this is about paga')
    }
    res.end(`
    <h1>oops!!!</h1>
    <p>the page is not not found</p> 
    <a href="/"> back home </a>`)
})
server.listen(5000)
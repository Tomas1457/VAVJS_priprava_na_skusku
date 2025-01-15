const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url == '/quote' && req.method=="GET"){
        fetch("http://quotes.example.com") //nedokoncene
    }
})

server.listen(8089);
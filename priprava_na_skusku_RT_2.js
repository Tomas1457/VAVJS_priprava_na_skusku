const http = require ('http');
const fs = require ('fs');

const server = http.createServer((req,res) => {
    if (req.url == '/filecontent'){
        const file = fs.readFileSync("./fil.html", {encoding: "utf-8"});
        res.writeHead(200, {"Content-type": "text/html"});
        res.write(file);
        res.end();
    }
    if (req.url == '/data'){
        fetch("http://meteo.data/today")
        .then(res=>res.json())
        .then(res => {
            res.writeHead(200, {"Content-type": "application/json"});
            res.write(JSON.stringify(res));
            res.end();
        })
    }
});

server.listen(8084);




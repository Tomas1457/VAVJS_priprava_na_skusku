const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

//setHeader(name, value)
//writeHead(statusCode, headers)
//statuscode(number)
//write(data) //JSON.stringify(data)
//end(data)
const server = http.createServer((req, res) => {

    if(req.url === '/' || req.url === '/index.html') { //vracia html subor
        const file = fs.readFileSync('public/index.html','utf-8');
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end(file);
    }
    else if(req.url === '/client.js') { //vracia JS subor
        const f = fs.readFileSync('public/client.js','utf-8'); 
        res.statusCode = 200;
        res.setHeader('Content-Type','application/javascript');
        res.end(f);
    }
    else if (req.url === '/register' && req.method === 'POST') { //POST poziadavka
        //pri pouziti express by nebolo nutnych tychto par riadkov nacitavania
        let body = '';
    
        req.on('data', (data) => {
            body += data; 
        });
    
        req.on('end', () => {
            const { name, password, email } = JSON.parse(body);

            const response = {
                userId: Math.floor(Math.random() * 10000),
                message: `User ${name} registered successfully!`
            };

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(response));
        });
    }    
    else if (req.url === '/app' && req.method === 'GET') { // vracia JSON s informáciami o aplikacii
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        
        const response = {
            appNumber: 12345, 
            appName: 'My Awesome App', 
            details: { 
                version: '1.0.0',
                author: 'Tomas Beres',
                license: 'MIT'
            },
            features: ['login', 'register', 'dashboard'] 
        };
        
        res.end(JSON.stringify(response)); // Posielame JSON odpoved
    }
    else if(req.url == "/quote" && req.method == "GET"){  //posielam poziadavku na stranku a vraciame to, co nam vrati tato stranka
        fetch("http://quotes.example.com/qoute")
            .then(response => response.json())
            .then(data => { res.writeHead(200,{"Content-Type": "application/json"}) 
            res.write(JSON.stringify(data)) 
            res.end() 
        }) 
    }
    else if (req.url === '/link' && req.method === 'GET') { //posielam obsah stranky 
        http.get('http://www.coca-cola.com/', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data); 
            });
        });
    }   
    else { //Error
        res.statusCode = 500; //alebo 400
        res.setHeader('Content-Type','text/plain');
        res.end('Error');
    }
});

server.listen(port, hostname, () => {
    console.log('Server running at http://'+hostname+':'+port+'/');
});
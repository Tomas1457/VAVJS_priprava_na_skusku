const http = require('http');
const fs = require('fs');

function parseBody(req, callback) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        callback(JSON.parse(body));
    });
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/' || req.url === '/index.html') {
            const html = fs.readFileSync('./index.html', 'utf-8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        } else if (req.url === '/client.js') {
            const js = fs.readFileSync('./client.js', 'utf-8');
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(js);
        }
    } else if (req.method === 'POST' && req.url === '/circle') {
        parseBody(req, (body) => {
            const input = parseInt(body.input, 10);
            const result = {
                x: input * 10,
                y: input * 10,
                r: input * 10
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
            
        });
    } 
});

server.listen(8080, () => {
    console.log('Server beží na porte 8080');
});

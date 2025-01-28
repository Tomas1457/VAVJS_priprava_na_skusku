// server.js
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public'))); //v priecinku public su ulozene subory 
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/data', (req, res) => {
    const { name, email } = req.body;
    res.json({ message: `Received name: ${name}, email: ${email}` });
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

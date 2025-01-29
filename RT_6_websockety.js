//ws.js
const WebSocket = require('ws');

const http = require ('http');

const server = http.createServer();

const wss = new WebSocket.Server({server});

server.listen(8084);

var counter = 0;
setInterval(() => {
    counter++;
},1000)

wss.on("connection", (ws) => {
    setInterval(() => {
        ws.send(JSON.stringify(counter));
    }, 2000);
})

//client.js
const socket = new WebSocket('ws://localhost:8084');

socket.onmessage = (event) => {
    const data = (event.data);
    let counter = JSON.parse(data);

    var span = document.createElement("span");

    span.textContent="Aktualny stav pocitadla: "+counter;
    document.body.appendChild(span);

};
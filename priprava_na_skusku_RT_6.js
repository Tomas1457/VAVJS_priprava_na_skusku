//ws.js


const { createServer } = require('http');
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({server});

server.listen(8084);

var counter = 0;


wss.on('connection',(ws) =>{
    setInterval(() => {
        counter+=1;
        ws.send(counter);
    },2000);
})

//client.js

const socket = new WebSocket('ws://localhost:8084');

socket.addEventListener(MessageChannel, (event)=>{
    span=document.createElement("span");
    span.innerText="Aktualny stav pocitadla: " + event.data;
    document.appendChild(span);
})
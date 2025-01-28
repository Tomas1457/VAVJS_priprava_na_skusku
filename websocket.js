//client.js
const socket = new WebSocket('ws://localhost:8082');

socket.onopen = () => {
    console.log("WebSocket connection established");
};

socket.onerror = (error) => {
    console.error("WebSocket error: ", error);
};

socket.onmessage = (event) => {
    const data = (event.data);
    handleMessage(socket, data);
};

function handleMessage(ws, message) {
    const data = JSON.parse(message);

    switch (data.type) {
        case 'endGame':{
            endGame();
            break;
        }
        case 'moveMissiles':{
            deleteMissiles();
            missiles = data.missiles;
            displayMissiles();
            break;
        }
        case 'moveLasers':{
            lasers.forEach(laser => {
                displayPoint(laser.x,laser.y,'white');
            });
            deleteMissiles();
            missiles = data.missiles;
            lasers = data.lasers;
            displayLasers();
            displayMissiles();
            break;
        }
        case 'sendScore':{
            printScoreAndSpeed(data.score, data.topScore);
        }
    }
}

function addMissile() {
    socket.send(JSON.stringify({ type: 'addMissile', player: player}));
}

function moveMissiles(){
    socket.send(JSON.stringify({ type: 'moveMissiles', player: player}));
}

function moveLasers(){
    socket.send(JSON.stringify({ type: 'moveLasers', player: player}));
}





//server.js

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        handleMessage(ws,message);
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});

function handleMessage(ws, message) {
    const data = JSON.parse(message);

    switch (data.type) {
        case 'addMissile':{
            const player = data.player;
            let thisPlayer = players.find(gamer => gamer.username === player);
            thisPlayer.missiles = addMissile(thisPlayer.missiles); 
            break;
        }
        case 'moveMissiles':{
            const player = data.player;
            let thisPlayer = players.find(gamer => gamer.username === player);
            thisPlayer.missiles = moveMissiles(thisPlayer.missiles);

            if(collision(thisPlayer.missiles)){
                ws.send(JSON.stringify({ type: 'endGame'}));
            }
            ws.send(JSON.stringify({ type: 'moveMissiles', missiles: thisPlayer.missiles}));
            break;
        }
        case 'moveLasers':{
            const player = data.player;
            let thisPlayer = players.find(gamer => gamer.username === player);
            if (thisPlayer){
                [thisPlayer.lasers, thisPlayer.missiles] = moveLasers(thisPlayer.lasers, thisPlayer.missiles);
                ws.send(JSON.stringify({ type: 'moveLasers', missiles: thisPlayer.missiles, lasers: thisPlayer.lasers}));
            }
            break;
        }
        case 'sendScore':{
            const player = data.player;
            const score = data.score;
            let thisPlayer = players.find(gamer => gamer.username === player);
            if (thisPlayer) {
                thisPlayer.actualScore = score;
                if (thisPlayer.topScore < score) {
                    thisPlayer.topScore = score;
                }
            }
            ws.send(JSON.stringify({type: 'sendScore',score: thisPlayer.actualScore, topScore: thisPlayer.topScore }));
            break;
        }
        case 'boatButtonPressed':{
            const player = data.player;
            let thisPlayer = players.find(gamer => gamer.username === player);
            thisPlayer.boatButtonNumber = data.boatButtonNumber;
        }
    }
}
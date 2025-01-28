window.onload = () => {
    fetch('/get-initial-username') 
        .then(response => response.json())
        .then(data => {
            player = data.username;
            document.getElementById("username-display").textContent = player;
            preGame();        
        })
        .catch(error => console.error('Error:', error));
}; 

function rotateShip(rotation, rShipl) { //l as local
    fetch('http://localhost:8080/rotateShip', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rotation: rotation, rShip: rShipl })
    })
    .then(response => response.json())
    .then(data => {
        deleteShip();
        rShip = data.rShip;
        displayShip();
    })
    .catch(error => console.error('Error:', error));
}

function addLaser() {
    fetch('http://localhost:8080/addLaser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rShip: rShip, player: player })
    })
    .then(response => response.json())
    .then(data => {
        lasers.push(data.retObj);
        displayLasers();
    })
    .catch(error => console.error('Error:', error));
}
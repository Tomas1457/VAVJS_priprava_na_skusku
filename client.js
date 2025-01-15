document.getElementById('send').addEventListener('click', () => {
    const inputVal = document.getElementById('input').value;

    fetch('/circle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: inputVal })
    })
    .then(response => response.json())
    .then(data => {
        drawCircle(data.x, data.y, data.r);
    })
    .catch(error => {
        console.error('Chyba:', error);
    });
});

function drawCircle(x, y, r) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Vymaž predchádzajúci obsah canvasu
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Nastav farbu na modrú
    ctx.fillStyle = 'blue';

    // Vykresli kruh
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}

button_prev = document.getElementById("prev");
button_next = document.getElementById("next");

var id = 0;

button_next.onclick = () => {
    id+=1;
}

button_prev.onclick = () => {
    id-=1;
}

function clicking() {
    fetch('http://localhost:8089/img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })
    })
    .then(response => response.json())
    .then(data => {
        img = document.getElementById("current");
        img.src = data.link;
    })
}
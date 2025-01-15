const button = document.getElementById("draw");
const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

button.onclick = () => {
    ctx.fillStyle = "green";
    ctx.fillRect(10,10,10,10);
}
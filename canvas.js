//1.moznost
<canvas id="my-canvas"></canvas>
var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

//2.moznost
var gameDiv = document.getElementById('game'); //tu by sa to dalo cez document, nie cez div
gameDiv.innerHTML = ''; //tymto prikazom najprv vymazem tabulku, ktora sa vytvorila pomocou initGameField z game.js

const canvas = document.createElement('canvas');
canvas.width = 1000;
canvas.height = 1000;

const ctx = canvas.getContext('2d');
canvas.id = "canvas";

gameDiv.appendChild(canvas);

//vyplnanie
ctx.fillStyle = "#FF0000";
ctx.fillRect(15, 15, 100, 200);

var img = document.getElementById("my-image");
ctx.drawImage(img, 10, 10);
ctx.drawImage ( image,
    sx, sy, sWidth, sHeight,
    dx, dy, dWidth, dHeight
);
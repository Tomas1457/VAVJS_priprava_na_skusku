/**
 * u1 - Tomas Beres
 */

a=15;   //dlzka strany stvorceku


function displayPoint(x,y,color,img) {                                      
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    if (img!=null) {
        ctx.drawImage(img,x*a,y*a,a,a);
    }
    if (color!=null){
        ctx.fillStyle=color;
        ctx.fillRect(x*a,y*a,a,a);
    }
    
    ctx.strokeStyle="black";
    ctx.strokeRect(x*a,y*a,a,a);
}


function displayShip() {

    boat = new Image();
    cannon = new Image();
    boat.src = ("https://live.staticflickr.com/7403/9082677514_1b688473ab_b.jpg");
    //Author: Hunkeler, Ch
    //Date: 2013
    //Title: Lifeguard boat
    //Availability: https://www.flickr.com/photos/chrishunkeler/9082677514/
    //Creative Commons Attribution-Share Alike 2.0 Generic license

    cannon.src = ("https://upload.wikimedia.org/wikipedia/en/8/87/Fremont-cannon.jpg");
    //Author: Jerz, R
    //Date: 2006
    //Title: The Fremont Cannon
    //Availability: https://en.wikipedia.org/wiki/Fremont_Cannon
    //Creative Commons Attribution-ShareAlike 2.5 License

    boat.onload = function() { //az ked su obrazky uplne nacitane, zobrazia sa (bez onloadu to neslo)
        shipRotations[rShip].points.forEach(point => {
            var tmpX = shipCenter[point][0];
            var tmpY = shipCenter[point][1];
            displayPoint(tmpX,tmpY,null,boat);                            
        });
    };
    cannon.onload = function() {
        var point = shipRotations[rShip].rpg;
        var tmpX = shipCenter[point][0];
        var tmpY = shipCenter[point][1];
        displayPoint(tmpX,tmpY,null,cannon);
    };                               
}

function initGameField() {
    var gameDiv = document.getElementById('game');
    gameDiv.innerHTML = ''; //tymto prikazom najprv vymazem tabulku, ktora sa vytvorila pomocou initGameField z game.js

    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;

    const ctx = canvas.getContext('2d');
    canvas.id = "canvas";

    
    gameDiv.appendChild(canvas);

    for (var y=0;y<yFields;y++){
        for (var x=0;x<xFields;x++){
            ctx.strokeStyle="black";
            ctx.fillStyle = "white";
            ctx.fillRect(x*a,y*a,a,a);
            ctx.strokeRect(x*a,y*a,a,a);
        }
    }

    displayShip();
}

initGameField();
displayShip();

function displayMissiles() {
    missile_img = new Image();
    missile_img.src = ("https://upload.wikimedia.org/wikipedia/commons/9/9d/Anti-Ship_Missile_-_Polyphem_-_ILA2002.jpg");
    //Date: 2015
    //Title: Polyphem auf der ILA 2002
    //Availability: https://de.wikipedia.org/wiki/POLYPHEM
    //Creative Commons Attribution-Share Alike 3.0 Unported license

    missiles.forEach(missile => {
        displayPoint(missile.x,missile.y,null,missile_img);                              
    });
}

function displayLasers() {
    laser_img = new Image();
    laser_img.src = ("https://upload.wikimedia.org/wikipedia/commons/1/12/Tile_n_679.png");
    //Author: Dilmen, N
    //Date: 2008
    //Title: Tile n 679
    //Availability: https://commons.wikimedia.org/wiki/File:Tile_n_679.png
    //GNU Free Documentation License, Version 1.2

    lasers.forEach(laser => {
        displayPoint(laser.x, laser.y, null,laser_img);                                     
    });
}

//from this point - new functions


window.addEventListener('keydown',(ev)=>{
    if(ev.key === 'a') rotateShip(-1);             
    else if(ev.key === 'd') rotateShip(1);
});


var drums_audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/24/audio_a0d2c343d6.mp3?filename=war-drum-loop-103870.mp3");
//Author: Pixabay
//Date: 2022
//Title: War Drum Loop
//Availability: https://pixabay.com/sound-effects/war-drum-loop-103870/
//Pixabay Content License

function addAudio(){
    if (drums_audio.paused){
        drums_audio.play();
        drums_audio.loop = true;
        drums_audio.volume = 1;
    }
    else{
        drums_audio.pause();
    }
}

function printScoreAndSpeed(){
    score_printed = document.createTextNode(score);
    speed_printed = document.createTextNode(speed);
    
    score_printed.id = "Score";
    document.body.appendChild(score_printed);

    speed_printed.id = "Speed";
    document.body.appendChild(speed_printed);

    score_printed.textContent = "Score: " + score + "\t";
    speed_printed.textContent = "Speed: " + speed;

    setInterval(()=>{
        score_printed.textContent = "Score: " + score + "\t";
        speed_printed.textContent = "Speed: " + speed;
    },speed);
}

button_pressed=false;

function changeButtonPressed(){
    if (button_pressed == false){
        button_pressed = true;
    }
    else{
        button_pressed = false;
    }
}

function debug(){
    setInterval(()=>{
        if (button_pressed == true)
            console.log("Score: " + score);
    },speed);
    
}

function deletePoint(x,y) {
    displayPoint(x,y,'white');
}

var missiles = [];

function collision_reset() {
    for(var i=0;i<missiles.length;i++){
        var missile = missiles[i];
        if(missile.x === mid.x+1 || missile.x === mid.x-1 || missile.y === mid.y+1 || missile.y === mid.y-1) {
            deletePoint(missile.x,missile.y);
            missiles.splice(i,1);
            displayShip();
        }
    }
}

function resetButton(){
    collision_reset();
    mainLoop();
}

function createButton(button_name,calling){
    var button = document.createElement("button");
    button.innerHTML = button_name;
    button.id = button_name;

    if (calling === "audio"){
        button.addEventListener("click",addAudio);
    }

    else if (calling === "debug"){
        button.addEventListener("click",changeButtonPressed);
    }

    else if(calling == "reset"){
        button.addEventListener("click",resetButton);
    }

    document.body.appendChild(button);
}

createButton("Audio","audio");
createButton("Debug","debug");
createButton("Reset","reset");

printScoreAndSpeed();
debug();
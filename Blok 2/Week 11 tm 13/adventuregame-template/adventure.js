<<<<<<< HEAD

var music = new Audio("Assets/Sound/magus.mp3");
music.play();

document.head += '<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">'
document.getElementById("title").innerHTML = "Doing groceries at Qualbert Ceyn";
document.getElementById("description").innerHTML = "Welcome to <b>The Game</b><br>Press Start";
document.getElementById("button1").innerHTML = "-"
document.getElementById("button2").innerHTML = "START"
document.getElementById("button3").innerHTML = "-"

document.getElementById("button2").addEventListener("click", function yo() { start(); });

function start() {
    music.pause();
=======
import { module } from './setup';


document.getElementById("button2").addEventListener("click", function yo() { alert("yoda"); });

function start() {
>>>>>>> master

}
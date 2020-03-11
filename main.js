const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
var winningScore = 2;
var showWinScreen = false;

var playerX = 0;
var playerY = 250;
var playerWidth = 10;
var playerHeight = 100;
var playerScore = 0;

var compX = 790;
var compY = 250;
var compWidth = 10;
var compHeight = 100;
var compScore = 0;

var ballX = canvasWidth / 2;
var ballY = canvasHeight / 2;
var ballRadius = 10;
var xDirection = Math.random() < 0.5 ? 1 : -1;
var ballXspeed = 5;
ballXspeed = ballXspeed * xDirection;

var yDirection = Math.random() < 0.5 ? 1 : -1;
var ballYspeed = 5;
ballYspeed = ballYspeed * yDirection;



window.onload = function() {
  function loop() {
    move();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  // setFormat();
  
  someSound.play();
  
  canvas.addEventListener("mousedown", clickToContinue);
  canvas.addEventListener("mousemove", handleMouse);
};


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

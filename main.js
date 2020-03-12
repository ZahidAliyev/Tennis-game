const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
var winningScore = 2;
var showWinScreen = false;

var startGame = false;

var playerX = canvasWidth * 0.05;
var playerY = 250;
var playerWidth = 10;
var playerHeight = 100;
var playerScore = 0;

var compX = canvasWidth * 0.95;
var compY = 250;
var compWidth = 10;
var compHeight = 100;
var compScore = 0;

//Ball parametrs
var ballX = canvasWidth / 2;
var ballY = canvasHeight / 2;
var ballRadius = 10;

//beginning ball random directions
var xDirection = Math.random() < 0.5 ? 1 : -1;
var ballXspeed = 5;
ballXspeed = ballXspeed * xDirection;

var yDirection = Math.random() < 0.5 ? 1 : -1;
var ballYspeed = 5;
ballYspeed = ballYspeed * yDirection;

window.onload = function() {
  canvas.addEventListener("mousedown", startOnePlayer);

  if (startGame == true) {
    function loop() {
      move();
      someSound.play();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    canvas.addEventListener("mousedown", clickToContinue);
    canvas.addEventListener("mousemove", handleMouse);
  } else {
    ctx.drawImage(table, 0, 0);
    ctx.fillText("1 Player", canvasWidth / 2 - 50, canvasHeight / 2, 100);
    ctx.fillText("2 Players", canvasWidth / 2 - 50, canvasHeight / 2 + 50, 100);
  }
};
function startOnePlayer(e) {
  if (
    e.offsetX >= 350 &&
    e.offsetX <= 430 &&
    e.offsetY >= 280 &&
    e.offsetY <= 310
  ) {
    function loop() {
      move();
      someSound.play();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    canvas.addEventListener("mousedown", clickToContinue);
    canvas.addEventListener("mousemove", handleMouse);
    console.log("start");
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

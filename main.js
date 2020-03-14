const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.font = " 30px Helvetica";

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
var winningScore = 2;
var showWinScreen = false;

var startGame = true;


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



window.onload = function() {
  function loop() {
    gameStartOrEnd();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  canvas.addEventListener("mousemove", handleMouse);
};



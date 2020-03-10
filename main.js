const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
var winningScore = 11;
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
var ballXspeed = 5;
var ballYspeed = 5;

const table = new Image();
table.src = "images/table.jpg";


window.onload = function() {
  function loop() {
    move();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  canvas.addEventListener("mousedown", clickToContinue);
  canvas.addEventListener("mousemove", handleMouse);

};
// functions
function draw() {
  // makeReactangle(0, 0, canvasWidth, canvasHeight, "black");
  ctx.drawImage(table, 0, 0);
  if (showWinScreen) {
    ctx.fillStyle = "white";
    if (playerScore >= winningScore) {
      ctx.fillText("Player Won", 350, 200);

    }
    if (compScore >= winningScore) {
      ctx.fillText("ComputerWon", 350, 200);
      
      
    }
    ctx.fillText("Click to continue", 350, 250);

    ballXspeed = 0;
    ballYspeed = 0;
    return;

    
  }
  makeReactangle(playerX, playerY, playerWidth, playerHeight, "white");
  makeReactangle(compX, compY, compWidth, compHeight, "white");

  drawBall(ballX, ballY, ballRadius, 0, Math.PI * 2, true, "red", "white");
  ctx.fillText(`Score: ${playerScore}`, 100, 100);
  ctx.fillText(`Score: ${compScore}`, 600, 100);
}

function resetBall() {
  if (playerScore >= winningScore || compScore >= winningScore) {
    showWinScreen = true;
    
  }
  ballX = canvasWidth / 2;
  ballY = canvasHeight / 2;
  ballXspeed = -ballXspeed;
  ballYspeed = getRandomIntInclusive(4, 6);
  console.log("resetBall -> ballYspeed", ballYspeed)
  var plusOrminus = Math.random() < 0.5 ? 1 : -1;
  ballYspeed = ballYspeed * plusOrminus;
  console.log(plusOrminus);
}


function computerPaddle() {
  if (ballY <= compY + 30) {
    compY -= 10;
  }
  if (ballY >= compY + compHeight - 30) {
    compY += 10;
  }
}




function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
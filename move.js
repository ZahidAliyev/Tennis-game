function computerPaddle() {
  if (ballY <= compY + 30) {
    compY -= 10;
  }
  if (ballY >= compY + compHeight - 30) {
    compY += 10;
  }
}

function resetBall() {
  if (playerScore >= winningScore || compScore >= winningScore) {
    showWinScreen = true;
  }
  ballX = canvasWidth / 2;
  ballY = canvasHeight / 2;
  ballXspeed = -ballXspeed;
  ballYspeed = getRandomIntInclusive(4, 6);
  ballXspeed = getRandomIntInclusive(4, 6);

  let plusOrminus = Math.random() < 0.5 ? 1 : -1;
  console.log("resetBall -> plusOrminus", plusOrminus);
  ballYspeed = ballYspeed * plusOrminus;
}

function ballMove() {
  
  ballX += ballXspeed;
  ballY += ballYspeed;
  if (ballX - ballRadius <= playerX + playerWidth && ballY >= playerY && ballY <= playerY+ playerHeight) {
    pushSound.play();
    let collidePoint = (ballY - (playerY + playerHeight/2));
    ballXspeed = -ballXspeed;
    ballYspeed = collidePoint * 0.35;
    ballXspeed += ballXspeed*0.1;
    console.log("move -> ballXspeed", ballXspeed)

  };
  if (ballX + ballRadius >= compX - compWidth && ballY >= compY && ballY <= compY+ compHeight) {
    pushSound.play();
    let collidePointAi = (ballY - (compY + compHeight/2));
    ballXspeed = -ballXspeed;
    ballYspeed = collidePointAi * 0.35;
    ballXspeed += ballXspeed*0.1;
    console.log("move -> ballXspeed", ballXspeed)

  };

  if (ballX - ballRadius <= 0) {
    compScore++;
    goalSound.play();
    resetBall();
  };
  if(ballX + ballRadius >= canvasWidth) {
    playerScore++;
    goalSound.play();
    resetBall();
  };
  if (ballY - ballRadius <= 0 || ballY + ballRadius >= canvasHeight) {
    ballYspeed = -ballYspeed;
  };
}

function move() {

  
  ballMove()
  computerPaddle();
  draw();

}

function ballMove() {
  
  ballX += ballXspeed;
  ballY += ballYspeed;
  if (ballX - ballRadius <= playerWidth && ballY >= playerY && ballY <= playerY+ playerHeight) {
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

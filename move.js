function move() {
  ballX += ballXspeed;
  ballY += ballYspeed;
  if (ballX - ballRadius <= playerWidth && ballY >= playerY && ballY <= playerY+ playerHeight) {
    let collidePoint = (ballY - (playerY + playerHeight/2));
    ballXspeed = -ballXspeed;
    ballYspeed = collidePoint * 0.23;

  };
  if (ballX + ballRadius >= compX - compWidth && ballY >= compY && ballY <= compY+ compHeight) {
    let collidePointAi = (ballY - (compY + compHeight/2));
    ballXspeed = -ballXspeed;
    ballYspeed = collidePointAi * 0.23;

  };

  if (ballX - ballRadius <= 0) {
    playerScore++;
    resetBall();
  };
  if(ballX + ballRadius >= canvasWidth) {
    compScore++;
    resetBall();
  };
  if (ballY - ballRadius <= 0 || ballY + ballRadius >= canvasHeight) {
    ballYspeed = -ballYspeed;
  };



  // computerPaddle();
  draw();
}

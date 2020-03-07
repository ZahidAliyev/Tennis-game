function move() {
  ballX += ballXspeed;
  ballY += ballYspeed;
  if (ballX - ballRadius <= playerWidth && ballY >= playerY && ballY <= playerY+ playerHeight) {
    pushSound.play();
    let collidePoint = (ballY - (playerY + playerHeight/2));
    ballXspeed = -ballXspeed;
    ballYspeed = collidePoint * 0.23;

  };
  if (ballX + ballRadius >= compX - compWidth && ballY >= compY && ballY <= compY+ compHeight) {
    pushSound.play();
    let collidePointAi = (ballY - (compY + compHeight/2));
    ballXspeed = -ballXspeed;
    ballYspeed = collidePointAi * 0.23;

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



  computerPaddle();
  draw();
}

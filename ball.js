                          //---------Ball parametrs
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

                          //FUNCTION---------RESET and  Ball movement after goal
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
  ballYspeed = ballYspeed * plusOrminus;
  ballXspeed = ballXspeed * plusOrminus;
}
                        //FUNCTION----------BALL MOVE--------------
function ballMove() {
  ballX += ballXspeed;
  ballY += ballYspeed;
                  //----------Ball Movement when hits player paddle
  if (
    ballX - ballRadius <= playerX + playerWidth &&
    ballY >= playerY &&
    ballY <= playerY + playerHeight &&
    ballXspeed < 0
    ) {
    pushSound.play();
    let collidePoint = ballY - (playerY + playerHeight / 2);
    ballXspeed = -ballXspeed;
    ballYspeed = collidePoint * 0.20;
    ballXspeed += ballXspeed * 0.1;
  }
            // ---------Ball Moevement when hits Computer paddle
  if (
    ballX + ballRadius >= compX &&
    ballY >= compY &&
    ballY <= compY + compHeight &&
    ballXspeed > 0
  ) {
    pushSound.play();
    let collidePointAi = ballY - (compY + compHeight / 2);
    ballXspeed = -ballXspeed;
    ballYspeed = collidePointAi * 0.20;
    ballXspeed += ballXspeed * 0.1;
  }
            // -------What happens when ball hits LEFT border*/
  if (ballX - ballRadius <= 0) {
    compScore++;
    goalSound.play();
    resetBall();
  }
            // ---------What happens when ball hits RIGHT border-------

  if (ballX + ballRadius >= canvasWidth) {
    playerScore++;
    goalSound.play();
    resetBall();
  }
            // ---------What happens when ball hits Top or Down border-------
  if (ballY - ballRadius <= 0 || ballY + ballRadius >= canvasHeight) {
    ballYspeed = -ballYspeed;
  }
}

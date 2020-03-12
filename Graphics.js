
function makeReactangle(topX, topY, width, height, color) {
    ctx.beginPath();
    ctx.rect(topX, topY, width, height);
    ctx.fillStyle = `${color}`;
    ctx.fill();
    ctx.closePath();
  }
  
  function drawBall(
    x,
    y,
    radius,
    startAngle,
    endAngle,
    direction,
    color,
    borderColor
  ) {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, direction);
    ctx.strokeStyle = `${borderColor}`;
    ctx.stroke();
    ctx.fillStyle = `${color}`;
    ctx.fill();
    ctx.closePath();
  }

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
  
    // drawBall(ballX, ballY, ballRadius, 0, Math.PI * 2, true, "red", "white");
    ctx.drawImage(ballImage, ballX-ballRadius, ballY-ballRadius);
    ctx.fillStyle = "white";
    ctx.fillText(`Player Score: ${playerScore}`, 100, 100);
    ctx.fillText(`Computer Score: ${compScore}`, 500, 100);
  }
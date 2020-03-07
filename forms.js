
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
function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad = ctx.createRadialGradient(0, 0, radius * .90, 0, 0, radius);
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";

  // Draw the edge circle with gradient
  // TODO: (Optional) add a gradient circle
  grad.addColorStop(0, 'white');
  grad.addColorStop(1, 'black');
  ctx.fillStyle = grad;
  ctx.fill();

  // Center circle
  // TODO: make the central black circle
  ctx.beginPath();
  ctx.arc(0, 0, radius *0.1, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();

}

function drawNumbers(ctx, radius) {
  //TODO: Make sure you show all the numbers
  var ang;
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  for (let i = 1; i<13; i++){
    ang = (i * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(i.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  // TODO: Calculate the angles of every hand depending on the time
  var now = new Date();
  var hour = now.getHours((hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60)));
  var minute = now.getMinutes((minute*Math.PI/30) + (second*Math.PI/(30*60)));
  var second = now.getSeconds();

  second = (second*Math.PI)/30;
  minute = (minute*Math.PI)/30 + (second*Math.PI)/(360*60);
  hour = (hour*Math.PI)/6 + (minute*Math.PI)/(6*60) + (second*Math.PI)/(30*60);
  //hour 
  hour = hour%12;
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minute
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
   //second
  drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

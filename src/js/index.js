var yPos = 0;
function setup() {  // setup() runs once
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}
function draw() {  // draw() loops forever, until stopped
  background(204);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

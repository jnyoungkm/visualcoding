function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  let squareSize = 50;
  background(255);
  for (let y=squareSize/2; y<=height; y=y+squareSize) {
    for (let x=squareSize/2; x<=width; x=x+squareSize) {
      fill(200)
      squareSquare(x, y, squareSize);
    }
  }
  noLoop();
}

function squareSquare(x, y, s) {
  if (s > 5) {
    square(x, y, s);
    s = s * 0.75;

    if (random(1) > 0.5) {
      fill(175);
      squareSquare(x-s/2, y-s/2, s);
      fill(140);
      squareSquare(x+s/2, y-s/2, s);
      fill(100);
      squareSquare(x-s/2, y+s/2, s);
      fill(100, 200, 50);
      squareSquare(x+s/2, y+s/2, s);
    }
  }
}
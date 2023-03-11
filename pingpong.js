/* eslint-disable no-undef, no-unused-vars */

let x = 100;
let y = 100;

let xStep = 7;
let yStep = 8;

let r = 255;
let g = 10;
let b = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1000);
  loop();
  // Put setup code here
}

function draw() {
  // Put drawings here
  fill(r, g, b);
  noStroke();

  if (x > windowWidth - 100 || x < 100) {
    xStep = -1 * xStep;
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
  }

  if (y > windowHeight - 100 || y < 100) {
    yStep = -1 * yStep;
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 255;
  }

  circle(x, y, 10, 1);

  x = x + xStep;
  y = y + yStep;
}
// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

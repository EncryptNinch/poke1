/* eslint-disable no-undef, no-unused-vars */
var sun;

const planets = [];
//stores positions of circles to create trace
const planetPositions = [];
//stores all stars
const starPositions = [];
//max number of positions in planetposition[]
const MAX_STARS = 70;

/////////////////////////////////////////

//main function
function setup() {
  createCanvas(windowWidth, windowHeight);
  //if activated, no edges will be drawn
  noStroke();
  createStars();
  sun = new Sun();
}
//create new planet at mouseposition
function mousePressed() {
  planets.push(new Planet(mouseX, mouseY));
}

//create maximale anzahl sterne
function createStars() {
  for (let i = 0; i < MAX_STARS; i++) {
    starPositions.push(new Star());
  }
}

//main draw function which executes every frame
//Reihenfolge beachten!
function draw() {
  //black

  background(0);

  //stars, which are stored in starpositions[] are drawn
  for (const star of starPositions) {
    star.draw();
  }
  sun.draw();
  //sun is created in front of the stars (matters in js)

  //planets, which are stored in planets[] are drawn
  for (const planet of planets) {
    planet.draw();
  }
}

//////////////////////////////////////////////////////////////////////

class Sun {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.size = 100;
    this.color = color(255, 230, 0);
  }
  draw() {
    // sun
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
}

///////////////////////////////////////////////////////////////

class Planet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.path = [];

    // random size
    this.size = random(2, 5);

    // random speed
    this.deltaX = random(-10, 100000);
    this.deltaY = random(-10, 100000);

    // random color
    this.c = color(random(120, 255), random(120, 255), random(120, 255));
  }

  draw() {
    const sunX = width / 2;
    const sunY = height / 2;
    const distanceFromSun = dist(this.x, this.y, sunX, sunY);

    // planets accelerate faster when they're closer to the sun
    // this simulates gravity pulling them in faster and faster
    this.deltaX += (sunX - this.x) / distanceFromSun;
    this.deltaY += (sunY - this.y) / distanceFromSun;

    //positions are updated --> Bewegung der Planeten
    this.x += this.deltaX;
    this.y += this.deltaY;

    //zeichnen des planeten
    fill(this.c);
    ellipse(this.x, this.y, this.size);
  }
}
////////////////////////////////////////////////////////////////
class Star {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);

    this.size = random(2, 3);
    this.color = color(255, 255, 255);
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
}

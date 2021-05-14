let x;
let y;

let xspeed;
let yspeed;

let logos = []
let dvd;
let imageWidth;
let imageHeight;

let r, g, b;

function preload() {
  dvd = loadImage("dvd_logo.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 4; i++) {
    logos[i] = new bounce();
  }
}

function draw() {
  background(0);
  for (let logo of logos) {
    logo.move();
    logo.show();
  }
}

function pickColor() {
    r = random(100, 256);
    g = random(100, 256);
    b = random(100, 256);
}
  
class bounce {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.xspeed = 10;
    this.yspeed = 10;
    this.imageWidth = 575;
    this.imageHeight = 450;
    pickColor();
  }
  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if (this.x + this.imageWidth >= width) {
      this.xspeed = -this.xspeed;
      this.x = width - this.imageWidth;
      pickColor();
    } else if (this.x <= 0) {
      this.xspeed = -this.xspeed;
      this.x = 0;
      pickColor();
    }

    if (this.y + this.imageHeight >= height) {
      this.yspeed = -this.yspeed;
      this.y = height - this.imageHeight;
      pickColor();
    } else if (this.y <= 0) {
      this.yspeed = -this.yspeed;
      this.y = 0;
      pickColor();
    }
  }

  show() {
    tint(r, g, b);
    image(dvd, this.x, this.y, this.imageWidth, this.imageHeight);
  }
}

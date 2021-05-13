let x;
let y;

let xspeed;
let yspeed;

let dvd;
let imageWidth;
let imageHeight;

let r, g, b;

function preload() {
  dvd = loadImage("dvd_logo.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = random(width);
  y = random(height);
  xspeed = 2;
  yspeed = 2;
  pickColor();
  }

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  imageWidth = 575;
  imageHeight = 450;
  background(0);
  tint(r, g, b);
  image(dvd, x, y , imageWidth, imageHeight)
  
  x = x + xspeed;
  y = y + yspeed;

    if (x + imageWidth >= width) {
    xspeed = -xspeed;
      x = width - imageWidth;
      pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
      x = 0;
      pickColor();
  }

  if (y + imageHeight >= height) {
    yspeed = -yspeed;
    y = height - imageHeight;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}
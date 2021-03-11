let img;
function preload() {
  img = loadImage('assets/laDefense.jpg');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  image(img, 0, 0);
}
//buttons
//copy
//eset
////edit
//image of the underside of a white umbrella and gridded ceiling above
//image example 1
//
function preload() {
  img = loadImage('assets/laDefense.jpg');
}
function setup() {
  background(50);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
  image(img, 10, 10, 50, 50);
}

//image example 2
function setup() {
  // Here, we use a callback to display the image after loading
  loadImage('assets/laDefense.jpg', img => {
    image(img, 0, 0);
  });
}

//image example 3

function preload() {
  img = loadImage('assets/gradient.png');
}
function setup() {
  // 1. Background image
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height, 100 x 100
  image(img, 0, 0);
  // 2. Top right image
  // Top-left corner of destination rectangle is at (50, 0)
  // Destination rectangle width and height are 40 x 20
  // The next parameters are relative to the source image:
  // - Starting at position (50, 50) on the source image, capture a 50 x 50
  // subsection
  // - Draw this subsection to fill the dimensions of the destination rectangle
  image(img, 50, 0, 40, 20, 50, 50, 50, 50);
}
let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

mousePressed 
function mousePressed() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}
mousePressed 
// returns a MouseEvent object
// as a callback argument
function mousePressed(event) {
  console.log(event);
}

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

mouseDragged 
function mouseDragged() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}
mouseDragged 
// returns a MouseEvent object
// as a callback argument
function mouseDragged(event) {
  console.log(event);
}
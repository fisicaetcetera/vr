function preload() {
  
  sun = loadImage('sun.jpg');
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(0);
  fill(0);
}

function calculate() {
  // Things you want to happen once per frame
  rotateY(0.5);
}

function draw() {
  translate(0, 0, 130);
  //rotateY(frameCount/100);
  //noStroke();
    noStroke();
  texture(sun);
  sphere(15);
}

let moon;
let venus;
let stars;

function preload() {
  createVRCanvas();
  moon = loadImage("moonmap1k.jpg");
  stars = loadImage("whole-sky-nasa.jpg");
  sun = loadImage("sun.jpg");
}

function setup() {
  setVRBackgroundColor(0,0,0);

}

function draw() {
  setViewerPosition(0, 0, 100);
  push();
    translate(0,0,-100);
    texture(moon);
    noStroke();
    rotateY(frameCount/1000);
    sphere(30);
  pop();

  
  push();
      rotateY(1.507);
    translate(0,0,-100);

    texture(sun);
    noStroke();
    rotateY(frameCount/1000);
    sphere(60);
  pop();


   push();
  translate(0, 0, 0);
  texture(stars);
  sphere(2000);
  pop();
} //draw

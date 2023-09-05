let randomx=[], randomy=[], randomz = [];
let moon;
let sun;
let planets = [];

function preload() {
  //createVRCanvas();
  moon = loadImage("moonmap1k.jpg");
  planets[0] = loadImage("sun.jpg");
  earth = loadImage("earthcloud.jpg");
  planets[1] = loadImage("mercury.jpg");
  venus = loadImage("venus.jpg");
  mars = loadImage("mars.jpg");
  jupiter = loadImage("jupiter.jpg");
  saturn = loadImage("saturn.jpg");
  uranus = loadImage("uranus.jpg");
  neptune = loadImage("neptune.jpg");
  pluto = loadImage("pluto.jpg");
}

function setup() {
  //setVRBackgroundColor(0, 0, 0);
  createCanvas(1000,1000, WEBGL);
  background(0);
  for(let i=0; i<150; ++i) {
    randomx[i] = random(-5000, 5000);
    randomy[i] = random(-500, 500);
    randomz[i] = random(-500, 500);
    console.log(planets);
  }
  
}

function draw() {
  //setViewerPosition(0, 0, 0);
  for(let i=0; i<150; ++i) {
    push();
    translate(randomx[i], randomy[i], randomz[i]);
    noStroke();
    //if(intersectsSphere(70, 0, 0)) {
    //   stroke(0); 
    //}
    console.log(planets[1]), planets[2];
    texture = planets[1];
    //rotateY(frameRate()/500);
    sphere(70);
    pop();
  }
}

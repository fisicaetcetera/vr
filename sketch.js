let randomx=[], randomy=[];

function preload() {
  createVRCanvas();
}

function setup() {
  setVRBackgroundColor(0, 0, 0);
  for(let i=0; i<5; ++i) {
    randomx[i] = random(-500, 500);
    randomy[i] = random(-500, 500);
  }
  
}

function draw() {
  setViewerPosition(0, 0, 0);
  for(let i=0; i<5; ++i) {
    push();
    translate(randomx[i], randomy[i]);
    fill('red');
    if(intersectsSphere(70, 0, 0)) {
      fill('blue');
            fill(255,0,0,80);
            text("Ola, Victor!", -50, -30); //teste
            text("Ola, Victor!", -50, -50); //teste
    }
    sphere(70);
    pop();
  }
}

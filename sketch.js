function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  
}

function draw() {
  background("white");

  // disegnare i quadrati 
  
for (let i = 0; i < 35; i++) {
  // primo numero = r secondo numero = g terzo numero = b + aggiungere trasparenza random
  // codice rgb per il verde: 173, 255, 47
  let colorequadrati = color(random(50, 185), random(110, 270), random(30, 140), random(20, 60));
  fill(colorequadrati);
  noStroke();
  
  // variabili quadrati
  let altezza = 100;
  let larghezza = 100;

  /*generare quadrati solo dal centro 
  let x = random(width/2, 60);
  let y = random(height-50, 60);

  let x = random(width/2, 100);
  let y = random(height/2, 100);*/

  let x = width / 2 + random(-130, 80); 
  let y = height / 2 + random(-320, 200);
  
   // Rotazione e traslazione --> push e pop tutorial di Steve Market
   push(); 
   translate(x + larghezza / 2, y + altezza / 2); 
   rotate(radians(random(-1000, 1000))); 
   rect(-larghezza / 2, -altezza / 2, larghezza, altezza); 
   pop(); 
 }

  // disegnare linee
  // nota: per avere una linea dritta le y devono essere uguali tra di loro --> x1 = lunghezza (inizio linea), y1= posizione altezza (inizio linea), x2 = lunghezza (fine linea), y2 = posizione altezza (fine li nea)

  for (let i = 0; i < 80; i++) {
    let spessoreLinea = random(0, 3.5);
    stroke(0);
    strokeWeight(spessoreLinea);  // Imposta lo spessore delle linee con la variabile spessoreLinea

    let y = random(height-790, height);
    let xStart = random(0, width / 2);
    let xEnd = random(xStart, width - 10);

    line(xStart, y, xEnd, y);

  
}
}

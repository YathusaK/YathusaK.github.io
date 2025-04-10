var drops = [];

let flash = false;
let flashTimer = 0;

var thunder;
var thunderSound;

var windSlider, windLabel;

function setup() {
  createCanvas(500, 500);
  p = createVector(random(width), 200)
  
  thunderSound = createAudio("loudthunder.mp3");

  windLabel = createP("Wind Strength:");
  windLabel.position(10, height + 210);

  windSlider = createSlider(-5, 5, 0, 0.1);
  windSlider.position(10, height + 250);

}

function draw() {
  background(20);

   for (let i = 0; i < 5; i++){
    drops.push(new Drop(random(width), 0, 0))
  }
  
// Lightning flash effect
if (flash) {
  background(255); // Bright white flash
  if (millis() - flashTimer > 100) {
    flash = false; // Stop flash after 100 ms
  }
}

  //update drops
  for (let d of drops){
    d.show()
    d.update()
  }

  //remove drops below canvas
  drops = drops.filter(d => d.pos.y < height + 100);

}

class Drop{
  constructor(x, y){
    this.pos = createVector(x, y)
    this.vel = createVector(0, random(8, 11))
    this.length = random(20, 40)
    this.strength = random(255)
  }
  show(){
    stroke(255, this.strength)
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y-this.length)
  }
  
  
  update() {
    let wind = windSlider.value();
    this.pos.add(createVector(wind, this.vel.y));
  }
  
}

function mousePressed() {
  thunderSound.stop();         // Stop any current play
  thunderSound.play();         // Start from the beginning
  flash = true;                // Trigger lightning flash
  flashTimer = millis();
}
//https://p5js.org/tutorials/organizing-code-with-functions/ 
// On how to setup onclick functions 

// https://editor.p5js.org/kelsierose94/sketches/MU2Y21aG0 
// this helped me set up the rain effect 
let bubbles = [];
let unicorn;
var colourPicker;
var bgColourPicker
let textInput;
let userText = ""; // Stores user-inputted text



function setup() {
  createCanvas(600, 400);
 
    //Color picker
    bgColourPicker = createColorPicker('grey'); 
    
    var bgColorButton = createButton('Refresh');
    bgColorButton.mousePressed(repaint);
    bgColourPicker.changed( repaint ); 
    background( bgColourPicker.value() );

    // Text input field
    textInput = createInput("");
    textInput.size(200);
    textInput.attribute("placeholder", "Input text here");
    textInput.input(updateText); // Call updateText() when the user types


  // Initialize the bubbles. reference to bubbles are from https://editor.p5js.org/Finbloom/sketches/Pf8ylW7O_
  for (let i = 0; i < 10; i++) {
    let x = random(width)
    let y = random(height)
    let r = random(10, 50)
    bubbles[i] = new Bubble(x, y, r)
  }
  
  // Initialize the unicorn bubble
  unicorn = new Bubble(400, 200, 10)
  
}

function mouseDragged() {
  let r = random(5, 30)
  let b = new Bubble(mouseX, mouseY, r)
  bubbles.push(b);
}

function draw() {
  // Continuously update background
  background(bgColourPicker.value());

  // Move the unicorn and show it
  unicorn.x = mouseX
  unicorn.y = mouseY
  unicorn.show()
  unicorn.move()

  // Loop through the bubbles and display them
  for (let i = bubbles.length - 1; i >= 0; i--) {
    let b = bubbles[i];

    // Check if the bubble has been on screen for more than 3 seconds
    if (millis() - b.timeCreated > 3000) {
      bubbles.splice(i, 1);  
      // Remove bubble from array
    } else {
      b.show();
      b.move();
      if (unicorn.intersects(b)) {
        b.changeColor(255);
      } else {
        b.changeColor(0);
      }
    }
  }
  // Display user text in the center https://p5js.org/examples/imported-media-words/
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(userText, width / 2, height / 2);

}

// Bubble class definition
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.timeCreated = millis();  // Record the creation time
    this.brightness = 0;  // Initial brightness (color)
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 0, 255 - this.brightness, 150);  // Dynamic color based on brightness
    ellipse(this.x, this.y, this.r * 2);
  }
}
//color/pic refresh
function repaint(){
    background( bgColourPicker.value() );
}

//text update
function updateText() {
    userText = textInput.value();
  }
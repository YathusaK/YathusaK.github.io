var x = 0;
var y = 0;

function setup(){
    createCanvas(300,100);
}

function draw(){
    background('#808080') // automatic semicolon insertion
    rect(x,y,10,10);
    x = x + 1;
    x = x % 300; // modulo operator
    y = y + 5;
    y = y % 200;
}
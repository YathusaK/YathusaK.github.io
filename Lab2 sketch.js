let postx;
let posty;
let postColor;

function setColor(){
    postColor = color(random(100, 256), random(100, 256), random(100, 256));

}

var bod = {
    x: 210,
    y: 210,
    w: 40,
    h: 55,
    draw: function(){
        stroke('white');
        rect(this.x, this.y, this.w, this.h);
        if(mousePressed){
            fill(postColor);
        }
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
    
}

var head = {
    x: 205,
    y: 175,
    w: 100,
    h: 300,
    xSpeed: 3,
    ySpeed: 8,
    draw: function(){
         stroke('white')
        rect(this.x, this.y, this.w, this.h);
        if(mousePressed){
        fill(postColor);
 }
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};



function setup(){
    createCanvas(700,480);

    postColor = color(random(100, 256), random(100, 256), random(100, 256));

}

function draw(){
    background('black');
    bod.draw();
    head.draw();
    head.move();

}

function mousePressed() {
    // On mouse press (re)set the position and color
   setColor();
}
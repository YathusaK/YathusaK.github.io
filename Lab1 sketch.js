function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0, 15, 50);
    fill('yellow');
    stroke('black');
    for(var i = 0; i < 1000; i++){
        rect((i*17)%width,(i*10)%height,10,5);
    }
    fill('black');
    stroke('red');
    for(var b = 0; b < 1000; b++){
       triangle((b*5000000)%width,(b*10)%height,1000,500);
    }

    fill('black');
    stroke('yellow');
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100,100,100,10);
    }else{
        rect(mouseX,mouseY,50,50,25,);
    }
}
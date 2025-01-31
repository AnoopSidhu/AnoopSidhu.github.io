

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('blue');
    stroke('white');
    for(var i = 0; i < 1000; i++){
        rect((i*20)%width,(i*20)%height,10,10);
    }
    fill('antiquewhite');
    stroke('black');
    if(mouseX <200){
        arc(mouseX, mouseY,80, 80, 0, PI + QUARTER_PI, PIE);
        }else{
        rect(mouseX, mouseY, 100,100);
        }
}
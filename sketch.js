var x = 0;
var y = 0;

function setup(){
    createCanvas(720,480,WEBGL);

    describe('A white sphere on a gray background.')
    
}

function draw(){
    background(230);

    orbitControl();
  
    ellipsoid(30);
  
    // background('#013C5A'); // automatic semicolon insertion 
    circle(x,y,10,10);
   x = x + 1;
   x = x % 500; // modulo operator
   //y = y + 2;
   //y = y % 400;
}
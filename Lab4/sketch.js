let capture;

function setup() {
    createCanvas(640, 480);
    capture = createCapture(VIDEO); 
    capture.size(640, 480);
    capture.hide(); 

    let img = createImg('image/dragon.png', 'Dragon Image');
    img.position(0, 600);
}

function draw() {
    background(0);
    image(capture, 0, 0, width, height); 
}
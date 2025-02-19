let colourPicker;
let strokeWeightSlider;
let button;
let bgColor = 'white'; 

function setup() {
    createCanvas(720, 300); 
    colourPicker = createColorPicker('deeppink'); 
    strokeWeightSlider = createSlider(1, 10, 5, 1); 
    background(bgColor); 

    button = createButton('Click me'); 
    button.position(0, 0);
    button.mousePressed(randomColor);
}

function draw() {
    strokeWeight(strokeWeightSlider.value()); 
    stroke(colourPicker.value()); 
    
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function randomColor() {
    bgColor = random(['red', 'green', 'blue', 'yellow','white','black']); 
    background(bgColor);
}

// Tutorial 1: 
// Source: https://p5js.org/examples/repetition-kaleidoscope/
let symmetry = 6;
let angle = 360 / symmetry;
let bgColor = 0; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(bgColor);
    strokeWeight(10);
    colorMode(HSB);
    angleMode(DEGREES);

 
    let bgToggle = document.getElementById('bgToggle');
    let clearButton = document.getElementById('clearCanvas');

    if (bgToggle) {
        bgToggle.addEventListener('change', toggleBackground);
    }
    if (clearButton) {
        clearButton.addEventListener('click', clearCanvas);
    }
}

function draw() {
    translate(width / 2, height / 2);

    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let lineStartX = mouseX - width / 2;
        let lineStartY = mouseY - height / 2;
        let lineEndX = pmouseX - width / 2;
        let lineEndY = pmouseY - height / 2;

        if (mouseIsPressed) {
            let lineHue = (mouseX + mouseY) % 360; 
            stroke(lineHue, 90, 90); // stroke is rainbow colors from - https://p5js.org/examples/animation-and-variables-drawing-lines/

            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                stroke(lineHue, 90, 90);
                strokeWeight(3);
                line(lineStartX, lineStartY, lineEndX, lineEndY);

                push();
                scale(1, -1);
                line(lineStartX, lineStartY, lineEndX, lineEndY);
                pop();
            }
        }
    }
}

// makes the toggle switch function
function toggleBackground() {
    bgColor = bgColor === 0 ? 255 : 0; 
    background(bgColor);
}

// wanted a clear canvas button so you dont have to refresh the site to restart 
function clearCanvas() {
    background(bgColor);
}
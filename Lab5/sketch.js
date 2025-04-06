let clickCount;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);

 
  clickCount = localStorage.getItem("clickCount");


  if (clickCount === null) {
    clickCount = 0;
    localStorage.setItem("clickCount", clickCount);
  }


  clickCount = int(clickCount);
  updateBackground();
}

function draw() {
  background(currentColor);
  text("Clicks: " + clickCount, width / 2, height / 2);
}

let currentColor = [100, 100, 255];

function mousePressed() {
  clickCount++;
  localStorage.setItem("clickCount", clickCount);
  updateBackground();
}

function updateBackground() {
  currentColor = [
    (clickCount * 40) % 255,
    (clickCount * 60) % 255,
    (clickCount * 30) % 255
  ];
}

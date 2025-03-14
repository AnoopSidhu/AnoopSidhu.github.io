let bubbles = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  setUpBubbleCount(200); 
}

function draw() {
  background(30, 50, 90);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.r = r;
    this.speed = createVector(random(-1, 1), random(-1, -1)); 
  }

  update() {
    this.pos.add(this.speed);
    if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  display() {
    fill(190, 230, 250, 150);
    stroke(190, 230, 250, 150);
    ellipse(this.pos.x, this.pos.y, this.r);
    fill(255, 255, 255, 180);
    ellipse(this.pos.x - 0.2 * this.r, this.pos.y - 0.2 * this.r, 0.15 * this.r);
    ellipse(this.pos.x - 0.3 * this.r, this.pos.y - 0.05 * this.r, 0.05 * this.r);
  }

  isClicked(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    return d < this.r;
  }
}

function setUpBubbleCount(bubbleCount) {
  for (let i = 0; i < bubbleCount; i++) {
    bubbles[i] = new Bubble(
      i * (width / bubbleCount) + 30, 
      random(100, 400), 
      random(10, 30)
    );
  }
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].isClicked(mouseX, mouseY)) {
      let popPos = bubbles[i].pos.copy();
      bubbles.splice(i, 1);
      
      for (let j = 0; j < 3; j++) {
        bubbles.push(new Bubble(popPos.x, popPos.y, random(10, 20)));
      }
      break;
    }
  }
}

// reference 1: (display) https://editor.p5js.org/joshwaitwhat/sketches/fI_4A32DU
// reference 2: https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/7-arrays/3-arrays-objects

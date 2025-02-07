var ball = {
   x: 100,
   y: 100,
   radius: 20, 
   xSpeed: 2,
   ySpeed: 2,
   colour: 'blue',

   draw: function() {
       fill(this.colour);
       ellipse(this.x, this.y, this.radius * 2);
   },

   move: function() {
       this.x += this.xSpeed;
       this.y += this.ySpeed;

       if (this.y > height - this.radius || this.y < this.radius) {
           this.ySpeed *= -1;
       }
       if (this.x < this.radius || this.x > width - this.radius) {
           this.xSpeed *= -1;
       }
   },

   changeColor: function() {
       this.colour = color(random(255), random(255), random(255)); // Random RGB color
   }
};

var greenBall = {
   x: 150,
   y: 150,
   radius: 30, 
   xSpeed: 2,
   ySpeed: 2,
   colour: 'green',

   draw: function() {
       fill(this.colour);
       ellipse(this.x, this.y, this.radius * 2);
   },

   move: function() {
       this.x += this.xSpeed;
       this.y += this.ySpeed;

       if (this.y > height - this.radius || this.y < this.radius) {
           this.ySpeed *= -1;
       }
       if (this.x < this.radius || this.x > width - this.radius) {
           this.xSpeed *= -1;
       }
   },

   changeColor: function() {
       this.colour = color(random(255), random(255), random(255)); // Random RGB color
   }
};

var smallBall = {
   x: 50,
   y: 50,
   radius: 15, 
   xSpeed: 2,
   ySpeed: 2,
   colour: 'red',

   draw: function() {
       fill(this.colour);
       ellipse(this.x, this.y, this.radius * 2);
   },

   move: function() {
       this.x += this.xSpeed;
       this.y += this.ySpeed;

       if (this.y > height - this.radius || this.y < this.radius) {
           this.ySpeed *= -1;
       }
       if (this.x < this.radius || this.x > width - this.radius) {
           this.xSpeed *= -1;
       }
   },

   changeColor: function() {
       this.colour = color(random(255), random(255), random(255)); // Random RGB color
   }
};

function setup() {
   createCanvas(720, 480);
}

function draw() {
   background('grey');
   ball.draw();
   ball.move();
   greenBall.draw();
   greenBall.move();
   smallBall.draw();
   smallBall.move();
}

// Change the brick's color on mouse press
function mousePressed() {
   ball.changeColor();
   greenBall.changeColor();
   smallBall.changeColor();
}
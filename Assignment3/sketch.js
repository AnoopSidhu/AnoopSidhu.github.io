let input, changeButton, brightnessSlider, instructionText;
let moodColors = {
  "happy": [255, 223, 0],
  "sad": [0, 102, 204],
  "angry": [204, 0, 0],
  "calm": [102, 204, 153],
  "excited": [255, 102, 0],
  "love": [255, 0, 127],
  "neutral": [200, 200, 200]
};
let currentColor = [200, 200, 200];
let moodText = "";
let textSizeAnim = 20;
let growing = true;

function setup() {
  createCanvas(600, 400).position(20, 100);
  textSize(20);
  textAlign(CENTER, CENTER);
  
  instructionText = createP("Enter a mood (happy, sad, angry, calm, excited, love, neutral):");
  instructionText.position(20, 10);
  
  input = createInput('');
  input.position(20, 50);
  
  changeButton = createButton('Set Mood');
  changeButton.position(input.x + input.width + 10, 50);
  changeButton.mousePressed(changeMood);
  
  brightnessSlider = createSlider(0.5, 2, 1, 0.01);
  brightnessSlider.position(changeButton.x + changeButton.width + 10, 50);
}

function changeMood() {
  let mood = input.value().toLowerCase();
  if (moodColors[mood]) {
    currentColor = moodColors[mood];
    moodText = mood.toUpperCase();
    textSizeAnim = 20; 
    growing = true;
  } else {
    currentColor = [150, 150, 150]; 
    moodText = "UNKNOWN";
  }
}

function draw() {
  let brightness = brightnessSlider.value();
  background(currentColor[0] * brightness, currentColor[1] * brightness, currentColor[2] * brightness);
  
  fill(0);
  textSize(textSizeAnim);
  text(moodText, width / 2, height / 2);
  
 
  if (growing) {
    textSizeAnim += 0.5;
    if (textSizeAnim > 50) growing = false;
  } else {
    textSizeAnim -= 0.5;
    if (textSizeAnim < 20) growing = true;
  }
}


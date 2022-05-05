var pulseSpeed = 0.5;
var sizeChange = 0;

let t = 0;
let value = ('#ffd700');
let value2 = ('#000000');
function setup() {
  // put setup code here
  createCanvas(1000,500);
  fill
}



function draw() {
  // put drawing code here
  background('#8F00FF');
  fill(value);
  // Hue Spread
  for (let x = 0; x <= width; x = x + 30) {
  for (let y = 0; y <= height; y = y + 30) {
  const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
  const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
  const angle = xAngle * (x / width) + yAngle * (y / height);
  // Circle Moves it 
  const myX = x + 20 * cos(2 * PI * t + angle);
  const myY = y + 20 * sin(2 * PI * t + angle);
  ellipse(myX, myY, 10)
  }
}
  // HS Stop
  rect(250, 60, 425, 60)
  ellipse(450,300,300,300)
  fill(value2);
  // Eyes
  sizeChange = sizeChange + pulseSpeed;
  if (sizeChange > 3 || sizeChange < -3) {
      pulseSpeed = pulseSpeed * -1;
  }
  ellipse(400,250,75 + sizeChange,125 + sizeChange)
  ellipse(500,250,75 + sizeChange,125 + sizeChange);
  // Mouth
  arc(450, 350, 150, 150, 0, PI);
   
  t = t + 0.01;

  fill(value2);
  textSize(40)
  text("Smile For The New Day", 250, 100)
}

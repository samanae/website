let x, y; // Variables to store the position of the shape
let shapeSize = 350; // Size of the shape
let color1, color2; // Colors for lerping

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("animation-container");
  x = width / 2; // Initialize the shape's position to cover the entire canvas
  y = height / 2;

  // Define the colors to be used for lerping
  color1 = color(11, 19, 50); // Red 
  color2 = color(11, 31, 111, 99.6); // Blue
}

function draw() {
  background(15, 15, 36); // Set the background color (was 230)
  noStroke();

  // Calculate the distance between the shape's position and the mouse position
  let dx = mouseX - x;
  let dy = mouseY - y;
  let distance = dist(x, y, mouseX, mouseY);
  // vector to translate
  let v1 = createVector(windowWidth/mouseX,windowHeight/mouseX);

  // Use lerp to smoothly change the fill color based on distance
  let lerpAmount = constrain(distance / 200, 0, 1); // Adjust the divisor to control the fade intensity
  let lerpedColor = lerpColor(color1, color2, lerpAmount,);
  fill(lerpedColor);

  // Move the shape towards the mouse position
  let easing = 0.05;
  x += dx * easing;
  y += dy * easing;

//.. VERY big ellipse
fill(lerpedColor);
drawingContext.filter = 'blur(40px)';
translate(p5.Vector.fromAngle(millis() / 1000, 40));
ellipse(x * 0.4, y * 2.3, shapeSize * 2, shapeSize * 2);

  // Draw the diffused circular shape at the current position
  fill(lerpedColor);
  drawingContext.filter = 'none'
  translate(p5.Vector.fromAngle(millis() / 1000, 20));
  //drawingContext.filter = 'blur(5px)';
  ellipse(x + 300, y - 200, 50, 50);

  fill(lerpedColor);
  //drawingContext.filter = 'blur(1px)';
  ellipse(x - 300, y + 100, 20, 20);

  fill(255, 255, 255);
  translate(p5.Vector.fromAngle(millis() / 1000, 20));
  drawingContext.filter = 'none'
  ellipse(x - 160, y -240, 7, 7);
  ellipse(x - 460, y + 240, 4, 4);
  ellipse(x - 660, y + 80, 4, 4);
  ellipse(x + 460, y + 140, 5, 5);
  ellipse(windowWidth - 50, windowHeight - 50, 5, 5);
  translate(p5.Vector.fromAngle(millis() / -2000, 0.4));
  ellipse(windowWidth - (windowWidth/2), windowHeight - (windowHeight*0.8), 5, 5);
  ellipse(windowWidth* 0.2, windowHeight - (windowHeight*0.4), 5, 5);
  drawingContext.filter = 'blur(3px)';
  ellipse(windowWidth - 450, windowHeight + 50, 10, 10);
  fill(11, 31, 111);
  ellipse(windowWidth - 1700, windowHeight - 600, 60, 60);


  fill(lerpedColor);
  drawingContext.filter = 'blur(1px)';
  ellipse(x - 600, y - 270, 20, 20);

  // big ellipse
  fill(lerpedColor);
  drawingContext.filter = 'blur(25px)';
  ellipse(x, y, shapeSize, shapeSize);
}

  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

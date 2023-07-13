let ZL;
let song;

function preload(){
  ZL = loadImage("ZL.jpeg")
 }

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("Shaki.mp3");
  background(0, 58, 90);
}

//draw function runs at 60 frames per second
function draw() {
 
  
  //moon
  fill(255)
  ellipse(windowWidth/2,40,100,100)
  fill(200)
  ellipse(506,35,30,30)
  ellipse(455,72,20,20)
  ellipse(447,17,30,30)
  
  //wheels
  stroke(0, 0, 0)
  strokeWeight(6)
  
  fill(255,0,0)
  ellipse(236, 511, 100, 100)
  ellipse(716, 511, 100, 100)
  
  //a line that makes the bed of the trunk
  stroke(200,200,200)
  strokeWeight(5)
  
  line(599,323,687,412);
  
  // a line for the road
  stroke(0,0,0)
  strokeWeight(10)
  line(0,564,windowWidth,564)
  
  //body
  noStroke()
  fill(110,250,200)
  rect(windowWidth*1/4, windowHeight*2/4, 480, 100,25,25)
  
  //windshield
  fill(0,0,255)
  triangle(288, 413, 370, 412, 370, 320)
  
  //seats
  fill(200,200,200)
  rect(370, 320,230, 92)
  
  //Lights
  fill(245, 188, 54)
  stroke(0)
  strokeWeight(3)
  rect(370,285,35,35)
  noStroke()
  triangle(370, 300,48,378,100,100)
 print(mouseX,mouseY)
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
     song.stop();
    background(0, 58, 90);
  } else {
   song.play();
    background(ZL,255)
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
  
  
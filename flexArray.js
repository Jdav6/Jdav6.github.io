
// these array's contain (x,y) coordinates
let x = [];
let y = [];

let ZL;

function preload(){
	ZL = loadImage("ZL.jpeg")
}

function setup(){
	createCanvas(windowWidth,windowHeight)
	imageMode(CENTER)
}

function draw(){

	background(35,125,245)

	for(let i = 0;i < x.length;i++){
		image(ZL,x[i],y[i], 350,300)
	}

}

function mouseReleased(){
x.push(mouseX)
y.push(mouseY)
print(x.length)
}

function keyPressed(){
	if(key === "x"){
		x.splice(x.length-1,1)
		y.splice(y.length-1,1)
	}

}





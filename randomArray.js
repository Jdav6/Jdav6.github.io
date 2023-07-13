

let imgs = [];
let randomButton
let canvas
let namesArray = ["Joe", "tyler", "Matthew", "william", "Brandon"]
let name = 0;
let randImage = 0;



function preload(){
	for(let i = 0; i<3; i++){
		imgs[i] = loadImage(i + ".jpg")
	}

}



function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style("z-index", "-1")
	canvas.position(0,0)

	randomButton = createButton(" Random Image and Name")
	randomButton.mousePressed(randomImageName)
	randomButton.addClass("coralButton")

	imageMode(CENTER)
	textAlign(CENTER)

}

function randomImageName() {
	randImage = int(random(imgs.length))
	name = int(random(namesArray.length))
	// body...
}

function draw(){
	background(255)
	image(imgs[randImage], windowWidth/2,windowHeight/2)
	textSize(200)
	fill(200,30,100)
	text(namesArray[name], 200,300)

}










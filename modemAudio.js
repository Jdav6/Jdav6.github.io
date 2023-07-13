

let canvas
let playButton

let modemSlider
let modemRateSlider
let bgSlider

let amplitude
let level

let modem

let selBackground

let r = 0;
let g = 0;
let b = 0;

let baby

let airstrikeFont

function preload(){
modem = loadSound("ModemSound.mp3")
baby = createImg("dancingbaby2.gif")
airstrikeFont = loadFont("airstrike.ttf")
}


function setup(){
	canvas = createCanvas(windowWidth,windowHeight)
	canvas.style('z-index','-1')
	canvas.position(0,0)
	background(0)

	playButton = createButton("play Audio")
	playButton.position(50,100)
	playButton.mousePressed(playmodem)

	modemSlider = createSlider(0,1,1,0.01)
	modemRateSlider = createSlider(0,3,1,0.01)
	bgSlider = createSlider(0,255,0,1)

	selBackground = createSelect();
	selBackground.position(10,100)
	selBackground.option("red")
	selBackground.option("blue")
	selBackground.changed(changeBackground)

	amplitude = new p5.Amplitude()
}

function changeBackground(){
	if(selBackground.value() === "red"){
		r = 255;
		g = 0;
		b = 0;
	}
	if(selBackground.value() === "blue"){
		r = 0;
		g = 0;
		b = 255;
	}
}
function playmodem(){
	if(!modem.isPlaying()){
		modem.loop()
		playButton.html("Pause Audio")
	}else{
		modem.pause()
		playButton.html("Play Audio")
	}
}

function draw(){
background(r, g, b)
textFont(airstrikeFont)
fill(225)
textSize(30)
text("dancing baby site!", windowWidth/2, 300)
baby.position(400,400)
level = amplitude.getLevel()
let size = map(level,0,.6,0,900)
ellipse(width/2,height/2,size,size)

modem.setVolume(modemSlider.value())
modem.rate(modemRateSlider.value())
print(modemSlider.value())


}





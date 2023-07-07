let ellipseX = 600;
let NGAnime;

// function preload(){
// 	NGAnime = loadImage("NGAnime.jpeg")
// }

function setup(){

createCanvas(windowWidth, windowHeight)
textAlign(CENTER,CENTER)
background(200,250,75)

// for(let i=0;i<100;i++){
// 	ellipse(random(windowWidth), random(windowHeight), 20,20)
// }
}


function draw(){

// if(keyIsPressed == true) {6

 
//  ellipseX = 800;
// } else{
// 	background(200,75,100)
// 	ellipseX = 300;
// }

for(let i = 0;i<windowWidth;i=i+10){
	print(i)
line(i,0,i,windowHeight)
}

for(let i = 0;i < windowHeight;i=i+10){
 	line(0,windowHeight,windowHeight/2,i)
}

// image(NGAnime, mouseX,mouseY,100,100)

textSize(100)
text("Joe", windowWidth/2,200);

ellipse(mouseX, mouseY,100,100)

}

// function mouseClicked(){
// 	print("click")
// 	if(ellipseX == 300){
// 		ellipseX = 800;
// 	}
// 	if(ellipseX == 800){
// 		ellipseX = 300;
// 	}
// }






let squareNum = [16,25,36,49,81,100];


function setup(){
createCanvas(windowWidth, windowHeight)

for(let i = 0;i < squareNum.length;i++){
	let posX = random(100,windowWidth-100)
	let posY = random(100,windowHeight-100)

	ellipse(posX,posY,squareNum[i],squareNum[i])
	text(squareNum[i],posX,posX)
}

print(squareNum[3])

}









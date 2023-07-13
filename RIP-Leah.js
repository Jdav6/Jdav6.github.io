

let LF;
let canvas
let dropdown

let homeBool = true
let collageBool = false
let galleryBool = false

let LA = [];

function preload(){

	LF = loadImage("Leah-first-page.jpeg")

	

}

function setup() {
canvas = createCanvas(windowWidth, windowHeight)
canvas.style("z-index", "-1")

 // Create a dropdown menu object
    dropdown = createSelect();
    // Position the dropdown menu
    dropdown.position(windowWidth-100,40);
    // Set options
    dropdown.option("Home");
    dropdown.option("Collage");
    dropdown.option("Gallery");

    dropdown.changed(switchPage)

}
 function switchPage(){
 	if(dropdown.value() == 'Home'){
 		homeBool = true
 		collageBool = false
 		galleryBool = false
 	}

 	if(dropdown.value() == 'Collage'){
		homeBool = false
 		collageBool = true
 		galleryBool = false
 	}

 	if(dropdown.value() == 'Gallery'){
		homeBool = false
 		collageBool = false
 		galleryBool = true
 	}


 }

function draw() {
	if(homeBool == true){
		home()
	}

	if(collageBool == true){
		collage()
	}

	if(galleryBool == true){
		gallery()
	}
}

function collage(){
background(145, 70, 219)
}

function gallery(){
	background(145, 70, 219)

	if(galleryBool === true){
		for(let i = 0;i<6;i++){
			LA[i] = loadImage("Leah-collage/" + i +".jpeg")
		
		}
	}

	if(galleryBool === true){
		for(let i = 0;i<5;i++){
			LA[i] = createVideo(["Leah-collage/" + i + ".mp4"])
			
		}
	}

}

function home(){
	background(145, 70, 219)
 image(LF, 500, 100)

 fill(77, 217, 26)
 textSize(30)
 text("█▓▒▒░░░Rest in Peace Leah. We Love you!░░░▒▒▓█", 20,30)

 fill(77, 217, 26)
 textSize(15)
 text('Leah had an incredible spirit and heart.\nShe was so indescribable about the way\nshe lived. It wasn’t without direction.\nIt wasn’t without ambition. It was with love.\nLeah was the friend you want to be around.\nShe loved everyone and everyone loved her.\nShe was an amazing person, mother, friend,\ndaughter, and sister. She was talented,\nstrong, kind-hearted, wise, and a very loyal\nride-or-die. She’d have your back through\nanything and won’t let anyone say anything\nbad about her friends and family.',200,200)
 
}















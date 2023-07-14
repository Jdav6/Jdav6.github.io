
let AL;
let BL;
let CL;
let DL;
let EL;
let FL;
let LF;
let canvas
let dropdown

let homeBool = true
let collageBool = false
let galleryBool = false

let LA = [];
let LAvideo = [];

function preload(){

	LF = loadImage("Leah-first-page.jpeg")

	AL = loadImage("Leah-collage/" + "a.jpeg")
	BL = loadImage("Leah-collage/" + "b.jpeg")
	CL = loadImage("Leah-collage/" + "c.jpeg")
	DL = loadImage("Leah-collage/" + "d.jpeg")
	EL = loadImage("Leah-collage/" + "e.jpeg")
	FL = loadImage("Leah-collage/" + "f.jpeg")
	GL = loadImage("Leah-collage/" + "g.jpeg")

	vid1 = createVideo(["Leah-collage/0.mp4"])
	vid2 = createVideo(["Leah-collage/1.mp4"])
	vid3 = createVideo(["Leah-collage/2.mp4"])
	vid4 = createVideo(["Leah-collage/3.mp4"])
	vid5 = createVideo(["Leah-collage/4.mp4"])
	vid6 = createVideo("Leah-collage/Collage-vid.mp4")

}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style("z-index", "-1")
	background(0)
 // Create a dropdown menu object
	dropdown = createSelect();
    // Position the dropdown menu
	dropdown.position(windowWidth-100,40);
    // Set options
	dropdown.option("Home");
	dropdown.option("Collage");
	dropdown.option("Gallery");

	dropdown.changed(switchPage)

	//since these are all HTML video objects,
    //i added controls so the user can play the videos
    //and scaled some of them down
    

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
	 vid1.hide()
    
    vid2.hide()
    
    vid3.hide()
   
    vid4.hide()

    vid5.hide()

    vid6.hide()
	}

	if(collageBool == true){
		collage()
	 vid1.hide()
    
    vid2.hide()
    
    vid3.hide()
   
    vid4.hide()

    vid5.hide()
	}

	if(galleryBool == true){
		gallery()

		vid6.hide()
	}
}

function collage(){
	background(145, 70, 219)
	vid6.show()
	vid6.position(380,130)
	vid6.attribute('controls', 'true')
	vid6.attribute('width', '650px')
   vid6.attribute('height', '450px')
}

function gallery(){
	background(145, 70, 219)
	image(AL, 50, 10, 250,250)
	image(BL, 330, 10, 350,300)
	image(CL, 700, 10, 300,250)
	image(DL, 1010, 10, 400,350)
	image(EL, 50, 300, 250,250)
	image(FL, 330, 330, 250,250)
	image(GL, 600, 330, 250,250)

	vid1.show()
	vid1.position(950,370)
	vid1.attribute('controls', 'true')
	vid1.attribute('width', '400px')
   vid1.attribute('height', '300px')
   

	vid2.show()
	vid2.position(750,370)
	vid2.attribute('controls', 'true')
   vid2.attribute('width', '400px')
   vid2.attribute('height', '300px')


   vid3.show()
   vid3.position(50, 600)
   vid3.attribute('controls', 'true')
   vid3.attribute('width', '400px')
   vid3.attribute('height', '300px')

   vid4.show()
   vid4.position(450, 600)
   vid4.attribute('controls', 'true')
   vid4.attribute('width', '400px')
   vid4.attribute('height', '300px')

   vid5.show()
   vid5.position(900, 650)
   vid5.attribute('controls', 'true')
   vid5.attribute('width', '400px')
   vid5.attribute('height', '300px')
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}














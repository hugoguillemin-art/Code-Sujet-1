let img,img2;

function preload(){

	img = loadImage('img/texture.jpg')
	img2 = loadImage('img/Rango.jpg')

}

function setup() {

  createCanvas(windowWidth,windowHeight);
//   imgBlur = img.get();
//   imgBlur.filter(BLUR,8)
//   image(imgBlur,0,0)


  


}

function draw(){

	
	let random = noise(frameCount*0.01)
	let imgCopie = img.get()

	// imgCopie.filter(POSTERIZE,random)
	imgCopie.filter(THRESHOLD,random)
	

	image(imgCopie,0,0)

	for (let i = 0; i < 30; i++) {
		couRage(i*10000,i*100)

	}
	
	

}
	

function windowResized(){

	resizeCanves(windowWidth,windowHeight)

}

function couRage(seed,lissage){

	let x = random(width)
	let y = random(height)
	// let x = noise(seed+frameCount*lissage)*width-400
	// let y = noise(seed+500+frameCount*lissage)*height
	let imgFrag =img.get(x,y,800,10)
	imgFrag.filter(INVERT)
	image(imgFrag,x,y,800,10)
}
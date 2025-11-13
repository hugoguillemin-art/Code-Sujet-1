let img;
let listeFilter =[];
let imgChoisie;

function preload(){

	img = loadImage('img/texture.jpg');
	
}

function setup() {
   createCanvas(windowWidth,windowHeight)
   
   
	for(let i = 0; i <7; i++){
		let copie = img.get()
		listeFilter[i] = copie;
	}

	listeFilter[0].filter(GRAY)
	listeFilter[1].filter(INVERT)
	listeFilter[2].filter(THRESHOLD,0.5)
	listeFilter[3].filter(POSTERIZE,2)
	listeFilter[4].filter(BLUR,8)
	listeFilter[5].filter(ERODE)
	listeFilter[6].filter(DILATE)

	imgChoisie = random(listeFilter);

}


function  draw(){
   

 }

 function mouseDragged(){
	 
    let frag = imgChoisie.get(mouseX,mouseY,50,50)
    image(frag,mouseX,mouseY)


	if (frameCount%50==0){
		imgChoisie = random(listeFilter);
	}
 }
 

 function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


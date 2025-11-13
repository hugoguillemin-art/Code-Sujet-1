let offsetX = 0;
let offsetY = 0;
let lissage = 0.01;
background(0,0,0)

function setup() {
  createCanvas(windowWidth,windowHeight);
  

}

function draw(){

	background(0,0,0,10)
	 cursor(CROSS);
	let scale = random(5,20);	
	

	  if (random()< 0.05) { //10% de chance de décalage à chaque frame
    let r= 20
    offsetX += random(-r, r);  // petit pas à gauche/droite
    offsetY += random(-r, r);  // petit pas en haut/bas
    
  }

  	let x = noise(1000+frameCount*lissage)*width
	let y = noise(frameCount*lissage)*height
	translate(offsetX, offsetY); //applique le décalage
  	
  	fill(random(230,255),109,0,255)// tous les prochains dessins seront remplis
	circle(x,y,scale) 
	noStroke()// annule un contour

	trace(255,157, 78,random(215,225));
	trace(100,123,44,random(185,191));

	
	
	
	
}

function trace(seed,r,g,b){
let scale = random(5,20);
fill(r,g,b)
 let x = noise(seed+200+frameCount*0.005)*width;
 let y = noise(seed+frameCount*0.005)*height;

circle(x,y,scale)
}


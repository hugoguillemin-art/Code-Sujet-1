

let img;
let possibleTR = [0.1, 0.2, 0.3, 0.4, 0.5];
let aleatoirTTR;
let copie;
let lissage = 0.005;

function preload(){

    img = loadImage('img/Dies_Iraes.jpeg');
}


function setup(){

    imageMode(CENTER);
    createCanvas(windowWidth, windowHeight);

    img.resize(0, height);
    copie = img.get();
    frag = img.get();
    copie.filter(POSTERIZE, 2);
    aleatoirTTR = random(possibleTR);
    copie.filter(THRESHOLD, aleatoirTTR);
    image(copie, width / 2, height / 2);
    
}


function draw() {

    let frag;

    let noiseR = noise(frameCount * lissage);
    let noiseG = noise(mouseX + frameCount * lissage);
    let noiseB = noise(mouseY + frameCount * lissage);

    let r = int(noiseR * 255);
    let g = int(noiseG * 255);
    let b = int(noiseB * 255);

    
    tint(r, g, b);
    image(copie, width / 2, height / 2);

   
   
    frag = img.get(mouseX - width/2 + img.width/2 - 100/2,mouseY - height/2 + img.height/2 - 100/2,100,100);
    

    
    noTint();
    image(frag,mouseX,mouseY);
    


}

function mouseDragged(){
    
    
}

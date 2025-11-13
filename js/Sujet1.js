

let img;
let aleatoirTR;
let possibleTR = [0.1, 0.2, 0.3, 0.4, 0.5];
let copie;
let offsetX = 0;
let offsetY = -50;
let offsetX2 = -200;
let offsetY2 = 260;


function preload(){

    img = loadImage('img/Cover.jpeg');
}


function setup(){

    imageMode(CENTER);
    createCanvas(windowWidth, windowHeight);
    img.resize(0, height);
    copie = img.get();
    sliderAutomatique(2,20,3,'Threshold Frequency', 1);
    sliderAutomatique(1,40,11,'Glitch Frequency', 1); 
    
}




function draw() {

    frequencyTR = curseurListe["Threshold Frequency"].value();
    frequencyGL = curseurListe["Glitch Frequency"].value();

     if (frameCount % frequencyTR == 0) {
        aleatoirTR = random(possibleTR);
        }
        
        let imgCopie = copie.get();
        // let imgCopie2 = copie.get();
        imgCopie.filter(THRESHOLD, aleatoirTR);
        
    
    if (frameCount % frequencyGL == 0) {
        
        // Glitch: mostly use original position, sometimes randomize
        let showFrag = random() > 0.3; // 70% chance to show
        let showFrag2 = random() > 0.3;

        let frag, frag2;
        let fragOffsetX = offsetX;
        let fragOffsetY = offsetY;
        let frag2OffsetX = offsetX2;
        let frag2OffsetY = offsetY2;

        if (random() > 0.5) { // 50% chance to glitch frag
            let fragW = int(random(80, 350));
            let fragH = int(random(80, 350));
            let fragX = int(random(0, img.width - fragW));
            let fragY = int(random(0, img.height - fragH));
            frag = img.get(fragX, fragY, fragW, fragH);
            fragOffsetX = int(random(-300, 300));
            fragOffsetY = int(random(-300, 300));
        } else {
            frag = img.get(img.width / 2 - 135 , img.height / 2 - 260 , 300, 350);
        }
        frag.filter(INVERT);

        if (random() > 0.5) { // 20% chance to glitch frag2
            let frag2W = int(random(60, 230));
            let frag2H = int(random(60, 230));
            let frag2X = int(random(0, img.width - frag2W));
            let frag2Y = int(random(0, img.height - frag2H));
            frag2 = img.get(frag2X, frag2Y, frag2W, frag2H);
            frag2OffsetX = int(random(-300, 300));
            frag2OffsetY = int(random(-300, 300));
        } else {
            frag2 = img.get(img.width / 2 - 275 , img.height / 2 + 153 , 160, 230);
        }
        frag2.filter(INVERT);

        if (showFrag) {
            imgCopie.copy(
                frag, 0, 0, frag.width, frag.height,
                imgCopie.width / 2 - frag.width / 2 + fragOffsetX,
                imgCopie.height / 2 - frag.height / 2 + fragOffsetY,
                frag.width, frag.height
            );
        }
        if (showFrag2) {
            imgCopie.copy(
                frag2, 0, 0, frag2.width, frag2.height,
                imgCopie.width / 2 - frag2.width / 2 + frag2OffsetX,
                imgCopie.height / 2 - frag2.height / 2 + frag2OffsetY,
                frag2.width, frag2.height
            );

        }
        
        // image(imgCopie2, width / 2, height / 2);
        image(imgCopie, width / 2, height / 2);
    }
    
}

 function keyPressed(){
    
    if (key === 'c'){
        noLoop();
    }

    if (key === 'z'){
        loop();
    }
 }
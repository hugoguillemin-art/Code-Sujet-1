let img;
let copie;
let lissage = 0.005;
// block effect parameters
let blockMin = 20;
let blockMax = 120;
let blockChance = 0.15;


function preload(){
    img = loadImage('img/Grec.jpg');
}

function setup(){
    imageMode(CENTER);
    createCanvas(windowWidth, windowHeight);
    sliderAutomatique(1,20,5,'Epaisseur carre', 1);
    img.resize(0, height);
    copie = img.get();
}

function draw() {

    image(copie, width / 2, height / 2);
    epaisseur = curseurListe["Epaisseur carre"].value();


    let bs = int(random(blockMin, blockMax));
    let imgCanvasLeft = width / 2 - img.width / 2;
    let imgCanvasTop = height / 2 - img.height / 2;

    for (let y = 0; y < img.height; y += bs) {
        for (let x = 0; x < img.width; x += bs) {
            if (random() < blockChance) {
                // sample block (ensure we don't go out of bounds)
                let w = min(bs, img.width - x);
                let h = min(bs, img.height - y);
                let block = copie.get(x, y, w, h);

                let canvasX = imgCanvasLeft + x + w / 2;
                let canvasY = imgCanvasTop + y + h / 2;
                image(block, canvasX, canvasY);
                push();
                noFill();
                stroke(0,255);
                strokeWeight(epaisseur);
                rectMode(CENTER);
                rect(canvasX, canvasY, w, h);
                pop();
    }
        }
    }
}
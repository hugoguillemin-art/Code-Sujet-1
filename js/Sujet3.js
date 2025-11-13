

let img;
// let img2;
let copie;
let lissage = 0.005;

function preload(){

    img = loadImage('img/Dragon.jpeg');
    // img2 = loadImage('img/Dies_Iraes.jpeg');
}


function setup(){

    imageMode(CENTER);
    createCanvas(windowWidth, windowHeight);

    img.resize(0, height);
    // img2.resize(width, 0);
    copie = img.get();
    // img2.filter(BLUR,2);
    image(copie, width / 2, height / 2);
    
}


function draw() {
    for (let i = 0; i < 60; i++) {
        let frag;
        let largeur = 500; // fragment length

        if (random() > 0.6) {
            // horizontal strip from copie
            let X = int(random(0, max(1, img.width - largeur)));
            let Y = int(random(0, max(1, img.height - 5)));
            frag = copie.get(X, Y, largeur, 5);
            frag.filter(BLUR, random(5));

            // map source pixel (X,Y) to canvas coordinates (imageMode CENTER)
            let imgCanvasLeft = width / 2 - img.width / 2;
            let imgCanvasTop = height / 2 - img.height / 2;
            let canvasX = imgCanvasLeft + X + frag.width / 2;
            let canvasY = imgCanvasTop + Y + frag.height / 2;

            if (random() > 0.8) {
                // frag.filter(THRESHOLD);
                image(frag, canvasX + random(-400,400), canvasY);
            } else {
                frag.filter(INVERT);
                image(frag, canvasX, canvasY);
            }
            

            
        } else {

             // horizontal strip from copie
            let X = int(random(0, max(1, img.width - largeur)));
            let Y = int(random(0, max(1, img.height - 5)));
            frag = copie.get(X, Y, largeur, 5);
            frag.filter(BLUR, random(5));

            // map source pixel (X,Y) to canvas coordinates (imageMode CENTER)
            let imgCanvasLeft = width / 2 - img.width / 2;
            let imgCanvasTop = height / 2 - img.height / 2;
            let canvasX = imgCanvasLeft + X + frag.width / 2;
            let canvasY = imgCanvasTop + Y + frag.height / 2;

            if (random() > 0.2) {
                frag.filter(THRESHOLD);
                image(frag, canvasX, canvasY);
            } else {
                // frag.filter(INVERT);
                image(frag, canvasX + random(-400,400), canvasY);
            }















            // // vertical strip from img2
            // let X = int(random(0, max(1, img2.width - 5)));
            // let Y = int(random(0, max(1, img2.height - 40)));
            // frag = img2.get(X, Y, 5, 40);
            // frag.filter(BLUR, random(5));

            // let img2CanvasLeft = width / 2 - img2.width / 2;
            // let img2CanvasTop = height / 2 - img2.height / 2;
            // let canvasX = img2CanvasLeft + X + frag.width / 2;
            // let canvasY = img2CanvasTop + Y + frag.height / 2;
            // image(frag, canvasX, canvasY);

            
        }

    
    }

}

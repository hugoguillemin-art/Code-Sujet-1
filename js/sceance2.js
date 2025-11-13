let img;
let img2;
let img3;
let lissage = 0.01;
let compteur=0;
let listImage;
let step = 1;
let virus;


function preload(){

    img = loadImage('img/Cover.jpg')
    img2 = loadImage('img/Dragon.jpg')
    img3 = loadImage('img/Grec.jpg')

}

function setup(){

        createCanvas(windowWidth,windowHeight);
        listImage = [img,img2,img3]
        img.resize(0,height)
        img2.resize(0,height)
        img3.resize(width,0)
        noSmooth()
        // tint(255, 0, 255, 255)
        image(img,0,0)
        noTint()
        sliderAutomatique(1,20,1,'quantité de virus', 1);
        virus = curseurListe["quantité de virus"].value();
        sliderAutomatique(0,100,50,'orientation', 1); //(valeur la plus basse, valeur la plus haute, valeur de départ)
    
}

function draw(){

    

     for (let i = 0; i <100 ; i++) {
    let x = random(width)
    let y = random(height)
    let fragment= get(x,y,20,20);
    let step = virus
    image(fragment,x+random(-step,step),y+random(-step,step))           
    }    

    print(virus)
}

function mouseDragged(){
    virus = curseurListe["quantité de virus"].value();
}

 function keyPressed(){
    
    if (key === 'c'){
        noLoop();
    }

    if (key === 'z'){
        loop();
    }

    // if (key === 'p'){
    //     step += 1;
    // }

    // if (key === 'm'){
    //     step -= 1;
    // }

}
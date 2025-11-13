let img;
let img2;
let img3;
let lissage = 0.01;
let compteur=0;
let listImage;
let step = 1


function preload(){

    img = loadImage('img/Grec.jpg')
    img2 = loadImage('img/MotifGrec.jpg')
    img3 = loadImage('img/Dragon.jpeg')

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
    
}

function draw(){

    

     for (let i = 0; i <1000 ; i++) {
    let x = random(width)
    let y = random(height)
    let fragment= get(x,y,20,20);
    image(fragment,x+random(-step,step),y+random(-step,step))           
    }





    // largeur = 10
    // if (compteur<img.width){ 
    //     compteur+=largeur+5;
    // }else{
    //     compteur=0;
    // }

    // let imageChoisie = random(listImage)
    // let fragment = imageChoisie.get(compteur,0,largeur,img.height)
    // image(fragment,compteur,mouseY)


//     let imgCopy = img3.get()
//     let resolution = mouseY;
//     if (resolution<1){
//         resolution=1
// }
//     imgCopy.resize(0,resolution)

//    image(imgCopy,0,0,img3.width,img3.height);
    
    
}

// function mouseDragged(){

//     // if(frameCount%8==0){
//     // let r = 20
//     // let x = mouseX+random (-r,r)
//     // let y = mouseY+random (-r,r)
//     // tint(255,100)
//     // let fragment = img3.get(x,y,random(1,200),random(1,200))
//     // image(fragment,mouseX,mouseY)
//     // }

 function keyPressed(){
    
    if (key === 'c'){
        noLoop();
    }

    if (key === 'z'){
        loop();
    }

    if (key === 'p'){
        step += 1;
    }

    if (key === 'm'){
        step -= 1;
    }

}
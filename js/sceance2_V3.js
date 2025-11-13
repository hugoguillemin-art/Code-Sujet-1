let img;


function preload(){

    img = loadImage('img/texture.jpg')

}

function setup(){

     createCanvas(windowWidth,windowHeight);
     img.resize(0,height)
     noSmooth()  
     background(255,183,3)
        
     img.loadPixels(); // charge les pixels du canvas
  for (let i = 0; i < img.pixels.length; i += 4) {
     let r =img.pixels[i] 
     let v =img.pixels[i+1]
     let b =img.pixels[i+2]
     let a =img.pixels[i+3]
     if (b<160){
        img.pixels[i+3] = 0
    }else{
        img.pixels[i+2] = random(255)  
    }
    if (v<100)
        img.pixels[i+1] = 33, 158, 188
    }
    
         
        
  
  
  
  img.updatePixels(); // applique les modifs
}


function draw(){
    image(img,0,0)
    // image(img,frameCount*10,0)
    // image(img,0,frameCount*10,)
    

} 

 function keyPressed(){
    
    if (key === 'c'){
        noLoop();
    }

    if (key === 'z'){
        loop();
    }

}

function altererImg(img,treshold){
   img.loadPixels(); // charge les pixels du canvas
  for (let i = 0; i < img.pixels.length; i += 4) {
   let r =img.pixels[i] 
    let v =img.pixels[i+1]
    let b =img.pixels[i+2]
    let a =img.pixels[i+3]

    if((r+v+b)/3<treshold){
        img.pixels[i+3]=0
        //face.pixels[i]=0
    }
  }
  img.updatePixels(); // applique les modifs
}
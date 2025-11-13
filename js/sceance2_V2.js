let img;


function preload(){

    img = loadImage('img/texture.jpg')

}

function setup(){

        createCanvas(windowWidth,windowHeight,WEBGL);
        img.resize(0,height)
        noSmooth()    
}

function draw(){
        // let x = noise(frameCount*0.01)*width
        // let y = noise(800+frameCount*0.01)*height
        translate(-width/2,-height/2);
        

        // trace(5000);
        // trace(1000);
        // trace(3000);
        // trace(8000);
        noStroke()
        let frag = img.get(mouseX,mouseY,100,100);
        texture(frag)
        translate(mouseX,mouseY)
        rotateY(frameCount*0.02)
        sphere(90)
        // image(frag,mouseX,mouseY)
}
        
       
        

// function trace(seed){
//     let x = noise(seed+frameCount*0.008)*width
//     let y = noise(seed+800+frameCount*0.005)*height
//     let frag = img.get(x,y,30,30);
//     texture(frag)
//     ellipse(x,y,30,30)
//     noStroke()

    


// }


 function keyPressed(){
    
    if (key === 'c'){
        noLoop();
    }

    if (key === 'z'){
        loop();
    }

}
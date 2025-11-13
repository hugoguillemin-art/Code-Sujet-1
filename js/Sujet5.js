let object;
let img;


function preload(){
    object = loadModel('TroisD/motif.obj');
    img = loadImage('img/MotifGrec.jpg');
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    
}

function draw() {
    let n = noise(frameCount*0.01);

    // background(163, 177, 138)
    directionalLight(255, 255, 255, 0.5, 0.5, -1);
    ambientLight(10);

    orbitControl()
    rotateY(frameCount * 0.05);
    rotateX(frameCount * 0.05);
    rotateZ(frameCount * -0.01);
    scale(100*(n*1.5));


    noStroke();
    if (img) {
        texture(img);
    } else {
        normalMaterial();
    }

    
    model(object);
    cursor(CROSS);
    
    filter(THRESHOLD, n*0.8+0.2);
    emissiveMaterial(86, 11, 173)
    // emissiveMaterial(200, 182, 255)
     

}
// 

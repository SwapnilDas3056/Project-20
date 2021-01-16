var mouse, cat;
var gardenImage, mouseImage1, mouseImage2, mouseImage3, mouseImage4, catImage1, catImage2, catImage3, catImage4;

function preload() {
    gardenImage = loadImage("garden.png");
    mouseImage1 = loadImage("jerryOne.png");
    mouseImage2 = loadImage("jerryTwo.png");
    mouseImage3 = loadImage("jerryThree.png");
    mouseImage4 = loadImage("jerryFour.png");
    catImage1 = loadImage("tomOne.png");
    catImage2 = loadImage("tomTwo.png");
    catImage3 = loadImage("tomThree.png");
    catImage4 = loadImage("tomFour.png");
}

function setup(){
    createCanvas(1000,800);

    mouse = createSprite(200,600,10,10);
    mouse.addImage(mouseImage2);
    mouse.scale = 0.2;

    cat = createSprite(800,600,10,10);
    cat.addImage(catImage1);
    cat.scale = 0.3;
    cat.depth = mouse.depth -1;
}

function draw() {
    background(gardenImage);

    drawSprites();

    keyPressed();
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addImage(catImage4);
        mouse.addImage(mouseImage4);
    }
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        mouse.addImage(mouseImage3);
        cat.addImage(catImage2);
        cat.velocityX = -5;
    }
}
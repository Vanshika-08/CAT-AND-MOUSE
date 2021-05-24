var bg, bgImg;
var cat1, cat2, cat3, cat1Img, cat2Img, cat3Img;
var mouse1, mouse2, mouse3, mouse1Img, mouse2Img, mouse3Img;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png", "images/cat3.png");
    mouse3Img = loadAnimation("images/mouse4.png");
    cat1Img = loadAnimation("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3Img = loadAnimation("images/cat4.png");
   

function setup(){
    createCanvas(700,700);
    //create tom and jerry sprites here
    mouse = createSprite(200, 600);
    mouse.addAnimation(mouseImg);
    mouse.scale = 0.07;

    cat = createSprite(500, 500);
    cat.addAnimation(cat1Img);
    cat.scale = 0.1;

}


function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < mouse.width/2 + cat.width/2){
            cat.velocityX = 0;
            cat.changeAnimation("catSitting", cat3Img);
            cat.changeAnimation("catSitting");
            cat.x = 300;

            mouse.changeAnimation("mouseFinding", mouse3Img);
            mouse.changeAnimation("mouseFinding");
        }
    
    
    text(mouseX, ",", mouseY, 10, 42);
    drawSprites();
}

function keyPressed(object1, object2){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.changeAnimation("catRunning" ,cat2Img);
        cat.changeAnimation("catRunning");

        mouse.changeAnimation("mouseTeasing", mouse2Img);
        mouse.changeAnimation("mouseTeasing");
        
    }
};
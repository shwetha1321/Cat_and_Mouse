var cat1, cat2, cat3, Cat1, Cat2, Cat3, mouse1, mouse2, mouse3, Mouse1, Mouse2, Mouse3; 
var garden, Garden;

function preload() {
    //load the images here
    Cat1 = loadImage("images/cat1.png");
    Cat2 = loadAnimation("images/cat2.png","images/cat3.png")
    Cat3 = loadAnimation("images/cat4.png");
    Mouse1 = loadImage("images/mouse1.png");
    Mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    Mouse3 = loadAnimation("images/mouse4.png")
    Garden = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1 = createSprite(800,650,10,10);
    cat1.addImage("Cat",Cat1);
    cat1.scale = 0.15;

    mouse1 = createSprite(300,650,10,10);
    mouse1.addImage("mouse",Mouse1);
    mouse1.scale = 0.15;

}

function draw() {

    background(Garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat1.x - mouse1.x < (cat1.width - mouse1.width)/2){

        cat1.velocityX = 0;
        cat1.addAnimation("Cat_Reset",Cat3);
        cat1.changeAnimation("Cat_Reset",Cat3);
        cat1.x = mouse1.x+100;

        mouse1.addAnimation("Mouse_Reset",Mouse3);
        mouse1.changeAnimation("Mouse_Reset",Mouse3);

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("left")){

        cat1.velocityX = -2;
        mouse1.addAnimation("Mouse_Teasing",Mouse2);
        mouse1.changeAnimation("Mouse_Teasing",Mouse2);

        
        cat1.addAnimation("Cat_Walking",Cat2);
        cat1.changeAnimation("Cat_Walking",Cat2);
    }

}

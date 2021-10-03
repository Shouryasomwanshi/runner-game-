

var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var ghostScore = 0;



function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {

  createCanvas(600, 600);

  
  
  tower = createSprite(300,300);
  ghost=createSprite(400,200,40,40);
  ghost.addImage(ghostImg)
  tower.addImage("tower",towerImg);

  tower.velocityY = 1;
  ghost.scale=0.5
}


function draw() {
  background(200);


  
  if(tower.y > 400){
      tower.y = 300
    }
 if (keyDown("space")){
ghost.velocityY=-5
    }

    ghost.velocityY=ghost.velocityY+0.5
    if (keyDown(RIGHT_ARROW)){
ghost.x=ghost.x+10


    }
    if (keyDown(LEFT_ARROW)){
ghost.x=ghost.x-2

    }
    drawSprites();
}


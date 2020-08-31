var fixedRect, movingRect;
var gameObject1 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 // movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameObject1=createSprite (400,700,30,10);
  gameObject1.shapeColor="orange" ;
  gameObject1. velocityY=-4;
}

function draw() {
  background(0,0,0);  

 bounceOff (gameObject1,fixedRect) ;
  drawSprites();
}


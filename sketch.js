var movingRect;
var rect1;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 100, 30, 80);
  movingRect.shapeColor = "yellow";
 // movingRect.velocityY = 5;

  rect1 = createSprite(400,300,80,30);
  rect1.shapeColor = "red";
 // rect.velocityY = -5;

  movingRect.debug = true;
  rect1.debug = true;
}

function draw() {
  background("green");

movingRect.x = mouseX;
movingRect.y = mouseY;

if(isTouching(movingRect,rect1)){
  movingRect.shapeColor = "blue";
  rect1.shapeColor = "blue";
}
else{
  movingRect.shapeColor = "yellow";
  rect1.shapeColor = "red";
}
 // bounceOff(movingRect, rect);

  drawSprites();
}


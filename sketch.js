var fixed,moving;

function setup() {
  createCanvas(400,400);
  fixed=createSprite(200, 200, 50, 50);
  moving=createSprite(50,50,50,50);
  fixed.shapeColor="blue";
  moving.shapeColor="pink";

}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(moving.x-fixed.x<fixed.width/2+moving.width/2 && fixed.x-moving.x<fixed.width/2+moving.width/2 && 
    moving.y-fixed.y<fixed.height/2+moving.height/2 && fixed.y-moving.y<fixed.height/2+moving.height/2 ){
      fixed.shapeColor="red";
      moving.shapeColor="red";
    }
else
{
  fixed.shapeColor="blue";
  moving.shapeColor="pink";
}

  drawSprites();
}
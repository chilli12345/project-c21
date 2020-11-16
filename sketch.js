var bullet, wall;
var weight, speed, thickness;

function setup () {
  createCanvas(1600,400);
  
  thickness=random(22,83);
  
  weight=random(30,52);
  speed=random(223,321);

  bullet=createSprite(50,200,40,20);
  bullet.shapeColor="white"
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="grey";

}

function draw(){
  background(0);
  bullet.velocityX=speed;
  collide();
  drawSprites();
}

function collide(){
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness * thickness * thickness);
    if(damage<10){
      wall.shapeColor="green";
      textSize(30);
      fill("green");
      text("Wall is effective",600,200);
    }
    else if(damage>10){
      wall.shapeColor="red";
      textSize(30);
      fill("red");
      text("Wall is not effective",600,200);
    }
  }
}
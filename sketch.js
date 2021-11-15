
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var backGroundImg;

function preload(){
  backGroundImg=loadImage("snow2.jpg");

}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

 ground=new Ground(600,height,800,20);
 
  
}

function draw() {
  background(backGroundImg);
  Engine.update(engine);

  ground.display();
  
  
  

  drawSprites();
}
var backgroundImg
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snowarray = [];
function preload(){
 backgroundImg = loadImage("snow1.jpg");

}
 

function setup() {
  createCanvas(1000,800);
 
  engine = Engine.create();
  world = engine.world;
 
 

}

function draw() {
  background(backgroundImg);  
    Engine.update(engine);
 
    snowarray.push( new Snow(Math.round (random(0,1000)),-1,50) )
    for (var i = 0;i < snowarray.length;i++)
   snowarray[i].display();

  drawSprites();


 
 
}

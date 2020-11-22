
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var paper1;
var ground;
var wall1, wall2, wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 390, 1200, 10);
	paper1 = new Paper(200, 200, 10);
	wall1 = new Wall(600, 380, 20, 80);
	wall2 = new Wall(800, 380, 20, 80);
	wall3 = new Wall(700, 380, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if (keyCode === UP_ARROW){
	Matter.Body.appplyForce(paper1.body, paper1.body.position,{x:85, y: -85});
  }
  
  drawSprites();
	ground.display();
	paper1.display();
	wall1.display();
	wall2.display();
	wall3.display();


}

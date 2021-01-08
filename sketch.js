const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,ground;
var ball1,ball2,ball3,ball4,ball5;
var c1,c2,c3,c4,c5;

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,350,15);
	ground = new Roof (350,495,700,10);
	ball1 = new Bob(210,350,35);
	ball2 = new Bob(280,350,35);
	ball3 = new Bob(350,350,35);
	ball4 = new Bob(420,350,35);
	ball5 = new Bob(490,350,35);
	
    c1 = new Rope(ball1.body,roof.body,0,0);
	c2 = new Rope(ball2.body,roof.body,0,0);
	c3 = new Rope(ball3.body,roof.body,0,0);
	c4 = new Rope(ball4.body,roof.body,0,0);
	c5 = new Rope(ball5.body,roof.body,0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightpink");

  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground.display();
  
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

start();
  drawSprites();
 
}

function start(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-10,y:-5})
}
}


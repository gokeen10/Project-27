
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

var roofObject;

var rope1;

function preload()
{
	bobObject1=new bob(100,450,70);
	bobObject2=new bob(200,450,70);
	bobObject3=new bob(300,450,70);
	bobObject4=new bob(400,450,70);
	bobObject5=new bob(500,450,70);

	roofObject=new roof(300, 100, 800, 10);

	rope1=new rope(bobObject1.body, roofObject.body,-bobDiameter*2, 0)

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();

  drawSprites();
 
}




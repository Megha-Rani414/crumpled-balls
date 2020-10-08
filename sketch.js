
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var wpaper,

//function preload()
//{
	
//}

function setup(){
	

	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wpaper = new Paper(200,550,25);


	Engine.run(engine);
  
}

function draw(){
 // rectMode(CENTER);
  background(0);
  Engine.update(engine);

  wpaper.display();


  
  drawSprites();
 
}




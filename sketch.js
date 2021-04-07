
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roof
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(600,150,300,20);
	bob1 = new bob(600)
	bob2 = new bob(650)
	bob3 = new bob(700)
	bob4 = new bob(550)
	bob5 = new bob(500)
	
	
	rope1=new Rope(bob1.body,roof.body,0, 0)
	rope2=new Rope(bob2.body,roof.body,50, 0)
	rope3=new Rope(bob3.body,roof.body,100, 0)
	rope4=new Rope(bob4.body,roof.body,-50, 0)
	rope5=new Rope(bob5.body,roof.body,-100, 0)
	
	Engine.run(engine);
	
  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	
		 Matter.Body.applyForce(bob5.body,bob5.body.position,
								{x:-50,y:-45});
	
		  }
	}
function draw() {
  rectMode(CENTER);
  background(230);
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  
  bob3.display();
  bob4.display();
  bob5.display();

  
 
}







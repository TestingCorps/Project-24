
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,600,1000,20);
	paperBall = new Ball(200,350,50);
	bin = new Dustbin(600,580,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paperBall.display();
  bin.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0,y:-85});
	 }
	 if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0,y:85});
	}
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:-85,y:0});
	}
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:0});
	}
   }


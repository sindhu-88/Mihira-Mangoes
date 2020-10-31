
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	boyIMG=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,620,50,100);
	boy.addImage(boyIMG);
	boy.scale=0.1;
	
	ground= new Ground(400,680,1000,20);
	tree= new Tree(650,530,20,300);
	stone= new Stone(150,550,20,20);

	mango1= new Mango(670,350,20,20);
	mango2= new Mango(640,260,20,20);
	mango3= new Mango(750,400,20,20);
	mango4= new Mango(530,350,20,20);
	mango5= new Mango(600,420,20,20);

	rockrope= new Rope(boy.body,stone.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boy.display();
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  rockrope.display();
    
  drawSprites();
 
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}


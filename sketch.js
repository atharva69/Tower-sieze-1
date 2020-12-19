
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;
var box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22;
var polygon;
var sling;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(400,240,300,10);
	ground2 = new Ground(650,180,200,10);


	//level1
	box1 = new Box(330,235,30,40);
	box2 = new Box(360,235,30,40);
	box3 = new Box(390,235,30,40);
	box4 = new Box(420,235,30,40);
	box5 = new Box(450,235,30,40);


	//level2
    box6 = new Box(360,195,30,40);
	box7 = new Box(390,195,30,40);
	box8 = new Box(420,195,30,40);


	//level3
	box9 = new Box(390,155,30,40);
	box10 = new Box(420,155,30,40);


	//level4
	box11 = new Box(410,115,30,40);


	//level1
	box12 = new Box(630,175,30,40);
	box13 = new Box(660,175,30,40);
	box14 = new Box(690,175,30,40);
	box15 = new Box(720,175,30,40);
	box16 = new Box(600,175,30,40);


	//level2
    box17 = new Box(660,135,30,40);
	box18 = new Box(690,135,30,40);
	box19 = new Box(720,135,30,40);


	//level3
	box20 = new Box(690,95,30,40);
	box21 = new Box(720,95,30,40);


	//level4
	box22 = new Box(710,55,30,40);

	polygon = new Polygon(40,100);
	sling = new  SlingShot(polygon.body, {x:90,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  polygon.display();
  sling.display();
  drawSprites();
 }
 function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
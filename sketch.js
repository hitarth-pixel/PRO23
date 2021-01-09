
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,685,1600,20);
	ball=new paper(1000,100);
	d1=new dustbin(1300,665,170,20);
    d2=new dustbin(1205,615,20,120)
    d3=new dustbin(1395,615,20,120)
	
  
}


function draw() {
	background("red");
	Engine.update(engine);
  
    ground.display();
	  d1.display();
	  d2.display();
	  d3.display();
  	ball.display()
  
}

function keyPressed(){
 
        if(keyCode===UP_ARROW){

			Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-55});

		}

}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var con1;
var con2;
var con3;
var con4;
var con5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options={
isStatic:false,
restitution:1,
friction:0,
density:0.5


	}

	ball1=Bodies.circle(320,340,20,ball_options)
	World.add(world,ball1);

	ball2=Bodies.circle(360,340,20,ball_options)
	World.add(world,ball2);

	ball3=Bodies.circle(400,340,20,ball_options)
	World.add(world,ball3);

	ball4=Bodies.circle(440,340,20,ball_options)
	World.add(world,ball4);

	ball5=Bodies.circle(480,340,20,ball_options)
	World.add(world,ball5);

	con1=new Rope(ball1.body,roof.body);
	con2=new Rope(ball2.body,roof.body);
	con3=new Rope(ball3.body,roof.body);
	con4=new Rope(ball4.body,roof.body);
	con5=new Rope(ball5.body,roof.body);

	var con1_options = {
		pointA:{x:320,y:340},
		bodyB:ball1,
		length:200,
		stiffness:0.2
	}
	var con2_options = {
		//bodyA:roof,
		pointA:{x:360,y:340},
		bodyB: ball2,
		length:200,
		stiffness:0.2
	}
	var con3_options = {
		//bodyA:roof,
		pointA:{x:400,y:340},
		bodyB: ball3,
		length:200,
		stiffness:0.2
	}
		var con4_options = {
		//bodyA:roof,
		pointA:{x:440,y:340},
		bodyB: ball4,
		length:200,
		stiffness:0.2
	}
	var con5_options = {
		//bodyA:roof,
		pointA:{x:480,y:340},
		bodyB: ball5,
		length:200,
		stiffness:0.2
	}
	con1 = Constraint.create(con1_options);
	World.add(world, con1);
	con2 = Constraint.create(con2_options);
	World.add(world, con2);
	con3 = Constraint.create(con3_options);
	World.add(world, con3);
	
	con4 = Constraint.create(con4_options);
	World.add(world, con4);
	con5 = Constraint.create(con5_options);
	World.add(world, con5);

	con1=new Rope(ball1,roof,-80, 0)
	con2=new Rope(ball2,roof,-40, 0)
	con3=new Rope(ball3,roof,0, 0)
	con4=new Rope(ball4,roof,40, 0)
	con5=new Rope(ball5,roof,80, 0)
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  con1.display();
 con2.display();
 con3.display();
 con4.display();
 con5.display();



  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
 
  
  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:10,y:0});
    }
}

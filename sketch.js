const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,line1;

function setup(){
    canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,1000,20,ground_options);
    World.add(world,ground);

     var ball_options ={
         restitution: 1.0
     }

    ball = Bodies.circle(200,100,20),ball_options;
    World.add(world,ball);

    line1 = new Line(640,400,150,20);
    World.add(world,line1);
    
    line2 = new Line(330,575,20,150);
    World.add(world,line2);	
    
    line3 = new Line(470,575,20,150);
    World.add(world,line3);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    line1.display();
    line2.display();
    line3.display();
}

function keyPressed(){

  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball, ball.position,{x:85,y:85}); 
}
 
}


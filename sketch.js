
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ground_2
var ball_2

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

  ground = Bodies.rectangle(300,590,600,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
ground_2=Bodies.rectangle(450,300,150,20,ground_options)
World.add(world,ground_2)
ball_2=Bodies.circle(500,0,20,ball_options)
World.add(world,ball_2)
rectMode(CENTER);
ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,600,20);
 ellipse(ball_2.position.x, ball_2.position.y,20)
 fill("blue")
 rect(ground_2.position.x, ground_2.position.y,300,10)

}


const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world
  var ground_opt = {
    isStatic:true 
  }
  var ball_opt = {
    restitution:1.5
  }
 ground = Bodies.rectangle(200,390,200,20,ground_opt);
 ball = Bodies.circle(200,100,30,ball_opt);
  World.add(world,ground);
  World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
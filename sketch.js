const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
 var engine,world,ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log3,log4,log5,log6;
var bird1;
var backgroundimg;
var platform;

function preload()
{
 backgroundimg=loadImage("bg.png")


}
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  var ground_option={isStatic:true}
 // var ball_option={restitution:1.0}
  // ball=Bodies.circle(300,300,20,ball_option);
 ground=Bodies.rectangle(600,height,1200,20,ground_option);
  World.add(world,ground);
  platform=Bodies.rectangle(150,305,300,170,ground_option)
  World.add(world,platform)

  box1=new box(700,320,70,70)
  box2=new box(920,320,70,70)
  box3=new box(700,240,70,70)
  box4=new box(920,240,70,70)
  box5=new box(810,160,70,70)
  pig2=new pig(810,220,40,40)
  log3=new logs(810,180,20,320,PI/2)
  pig1=new pig(810,350,40,40)
  log1=new logs(810,260,20,320,PI/2)
  log4=new logs(760,120,20,150,PI/7)
  log5=new logs(870,120,20,150,-PI/7)
  log6=new logs(230,180,20,80,PI/2)
  bird1=new bird(100,100,50,50) 
  var options={
      bodyA:bird.body,
      bodyB:log6.body,
      length:10,
      stiffness:0.04
      

  }
 rope1=Constraint.create(options)
 World.add(world,rope1)

}

function draw() {
  background(backgroundimg);  
  Engine.update(engine);
  rectMode(CENTER);
  fill("orange")
   rect(ground.position.x,ground.position.y,1200,20);
   rect(platform.position.x,platform.position.y,300,170)
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   pig1.display();
   pig2.display();
   log1.display();
    log3.display();
     log4.display();
      log5.display();
      bird1.display();
      log6.display();
     
//ellipse(ball.position.x,ball.position.y,50,50,);


}
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;







function setup() {
  createCanvas(800,400);
  

  engine = Engine.create()
  world = engine.world;

  blowerMouth = new BlowerMouth(400, 200, 100, 90);
  blower = new Blower(300,230,100,30);
  ball = new Ball(width / 2.5 + 80, height / 2 - 80, 80, 80);
  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background("grey"); 
  Engine.update(engine);
  
blowerMouth.show();
blower.show();
ball.show();

}
function blow() {
  Matter.Body.applyForce(ball.body, { x:0, y:0 }, { x: 0, y: 0.05});


}
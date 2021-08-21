const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;

function preload() {
  bg = loadImage("images/background.png")
}

function setup() {
  createCanvas(600,600);
  engine = Engine.create(); 
  world = engine.world;  
}

function draw() {
  background(bg);  
  Engine.update(engine)
}
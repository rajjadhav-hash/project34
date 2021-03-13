const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background, backgroundImage;
var ground;
var hero;
var fly;
var monster;
function preload() {
backgroundImage=loadImage("image/GamingBackground.png")
monsterImage=loadImage("image/Monster-01.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground=new Ground(500,500,1300,20);
  hero=new Hero(80,40,150);
  fly=new Fly(hero.body,{x:90,y:40});
  block1=new Block(500,380,50,60);
  block2=new Block(500,360,50,60);
  block3=new Block(500,340,50,60);
  block4=new Block(500,320,50,60);
  block5=new Block(500,300,50,60);
  block6=new Block(500,280,50,60);
  block7=new Block(500,260,50,60);
  block8=new Block(650,380,50,60);
  block9=new Block(650,360,50,60);
  block10=new Block(650,340,50,60);
  block11=new Block(650,320,50,60);
  block12=new Block(650,300,50,60);
  block13=new Block(650,280,50,60);
  block14=new Block(800,380,50,60);
  block15=new Block(800,360,50,60);
  block16=new Block(800,340,50,60);
  block17=new Block(800,320,50,60);
  block18=new Block(800,300,50,60);
  block19=new Block(800,280,50,60);
  block20=new Block(800,260,50,60);
  block21=new Block(800,240,50,60);
  block22=new Block(950,380,50,60);
  block23=new Block(950,360,50,60);
  block24=new Block(950,340,50,60);
  block25=new Block(950,320,50,60);
  block26=new Block(950,300,50,60);
  monster=new Monster(1200,200,100);
 //monster.image=loadImage("image/Monster-01.png");
  
}


function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}


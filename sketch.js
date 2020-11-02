const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;

var score = 0;
var particles = [];
var plinkos = [];
var divisions = [];
gamestate = "play"
var divisionHeight = 300;

function preload(){
  bgimg = loadImage("bg.png");
}
function setup() { 
  createCanvas(480,800);
  
 

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  //create division bodies
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  //spawn particles
  
  
}

function draw() {
  Engine.update(engine);
  background(bgimg );
  fill("gold")
  textSize(20)
  text("Score: " + score, width-300, 50)
  text("100" , 20,  600)
  text("150" , 100, 600)
  text("200" , 180, 600)
  text("200" , 260, 600)
  text("150" , 340, 600)
  text("100" , 420, 600)
if(gamestate === "play"){
  if (mouseIsPressed) { 
    if (frameCount % 10 === 0 ){
    if (mouseButton === LEFT) { 
      particles.push(new Particle(mouseX, 10, 10));
  
    } 
  }
} 
}
   

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
    if(k === 5){
      gamestate = "end"
    }
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  if(gamestate === "end"){
    textSize(50)
    fill("gold")
    text("GAMEOVER", 100,200)
  }
  drawSprites();
  
  
}




function setup() {
  createCanvas(1350,800);
  
}

function draw() {
  background("black");  


  spawnDrops();

  drawSprites();
}

function spawnDrops(){
rand = random(0,1350);
var raindrop = createSprite(rand,0,5,random(30,40));
raindrop.velocityY = random(2,10);
raindrop.shapeColor=color(random(0,255),random(0,255),random(0,255));
}
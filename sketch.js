var Space, SpaceImg, Asteroid, AsteroidImg, Spaceship, SpaceshipImg
var gameState = "PLAY";
function preload(){
SpaceImg = loadImage("Space.png")
AsteroidImg = loadImage("Asteroid.png")
SpaceshipImg = loadImage("SpaceShip.png")
}

function setup(){
createCanvas(1000,650);
edges = createEdgeSprites()

//Background
Space = createSprite(300,300,0,0)
Space.scale = 8;
Space.addImage(SpaceImg);

//Space Ship
Spaceship = createSprite(100,500,0,0)
Spaceship.scale = 0.5;
Spaceship.addImage(SpaceshipImg);

AsteroidGroup = new Group();
}

function draw(){
  background("white");
  if(gameState === "PLAY"){

  
  //Arrow Functions
  if(keyDown(UP_ARROW)){
     Spaceship.y = Spaceship.y - 6;
  }
  if(keyDown(DOWN_ARROW)){
    Spaceship.y = Spaceship.y + 6;
 }
 
 Spaceship.collide(edges)

 if(AsteroidGroup.isTouching(Spaceship)){
   gameState = "END";
 }

 camera.position.x = Spaceship.x;
 camera.position.y = Spaceship.y;

 asteroid();

 drawSprites();
}
if(gameState === "END"){
  textSize(50);
  stroke("yellow");
  fill("black");
  text("Game Over", 200,200);
}

}
function asteroid(){
  if(frameCount % 70 === 0){
    Math.round(random(20,600));
    Asteroid = createSprite(950,0,0,0);
    Asteroid.y = Math.round(random(20,600));
    Asteroid.velocityX = -3
    Asteroid.scale = 0.3;
    AsteroidGroup.lifetime = 50;
    Asteroid.addImage(AsteroidImg);
    AsteroidGroup.add(Asteroid);
  }
}

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  survivalTime = 0
}
function draw() {
 background(255)
  createCanvas(windowWidth,windowHeight);
 stroke("black")
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);   
  if(ground.x<0) {
    ground.x = ground.width/2
 }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
 
    camera.position.x = displayWidth/2;
    camera.position.y =monkey.y
  

  drawSprites();
  spawnBanana();
  spawnObstacles();
  


}
function spawnBanana() {
  if(frameCount % 80 === 0){
    var banana = createSprite(80,315,10,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4
    banana.lifetime = 100
    banana.scale = 0.1
 }
}
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(300,300,10,40)
    obstacle.y = Math.round(random(325,325));
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4
    obstacle.scale = 0.1
  
  }
}






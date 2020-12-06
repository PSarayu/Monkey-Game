
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score=0;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
monkey = createSprite(80,315,20,20)  
monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);

  
   FoodGroup = createGroup();
  obstacleGroup= createGroup();
  
 }


function draw() {
  background("white");
  
  if(ground.x>0){
  ground.x=ground.width/2;
  //console.log(ground.x)
  }
  
  if(keyDown("space") && monkey.y >=150){
    //console.log (monkey.y)
    monkey.velocityY=-12 
   }
  
   // add gravity
   monkey.velocityY = monkey.velocityY + 0.8
  
   // make the monkey touch the ground
   monkey.collide(ground);
  
  spawnbananas();
  spawnObstacles();
  
  stroke("black");
  textSize(20);
  fill("lightblue");
  text("Score="+score,500,50);
  
  ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
  
  stroke("black");
  textSize(20);
  fill("red");
  survivalTime=Math.ceil(frameCount/getFrameRate())
  text("Survival Time="+survivalTime,100,50)
  
  
drawSprites();
  
}

function spawnbananas(){
  if(frameCount%60 ===0){
    banana = createSprite(610,150,20,20)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-5;
    banana.lifetime=210
    FoodGroup.add(banana)
   }
  }

function spawnObstacles(){
  if(frameCount%60===0){
   obstacle=createSprite(610,327,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
    obstacle.velocityX=-7
    obstacle.lifetime=210
    obstacleGroup.add(obstacle)
    }

}




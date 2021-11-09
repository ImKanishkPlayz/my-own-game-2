var canvas, backgroundImage;

var gameState = 0;

var form, player, game;

var ninja, ninjaImg, enemyNinjaImg, zombie, zombieImg, shuriken, shurikenImg;


function preload(){
  backgroundImage = loadImage("images/village-1.jpg")
  ninjaImg = loadAnimation("images/ninja.png")
  enemyNinjaImg = loadAnimation("images/enemy_ninja.png")
  zombieImg = loadImage("images/zombie.png")
  shurikenImg = loadImage("images/shuriken_.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  game = new Game();
 
  game.start();
}


function draw(){
  background(backgroundImage);
  if(gameState === 1){
    clear();
    game.play();
  }


  if(gameState === 2){
    game.end();
  }
}

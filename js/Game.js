class Game {
  constructor(){

  }

  

  start(){
    if(gameState === 0){
      player = new Player();
      
      form = new Form()
      form.display();
    }
    ninja = createSprite(280, height - 210);
    ninja.addAnimation("forward", ninjaImg);
    ninja.addAnimation("backward", enemyNinjaImg);
    ninja.scale = 0.5;

    shuriken = createSprite(280, height - 210);
    shuriken.addImage(shurikenImg);
    shuriken.scale = 0.05;


    zombie = createSprite(width - 200, height - 220);
    zombie.addImage(zombieImg);
    zombie.scale = 0.4;
    zombie.velocityX = -1;
  }

  play(){
    form.hide();
    background(backgroundImage);

    if(keyIsDown(LEFT_ARROW)){
      ninja.x = ninja.x - 8;
      shuriken.x = shuriken.x - 8;
      ninja.changeAnimation("backward", enemyNinjaImg);
    }

    if(keyIsDown(RIGHT_ARROW)){
      ninja.x = ninja.x + 8;
      shuriken.x = shuriken.x + 8;
      ninja.changeAnimation("forward", ninjaImg);
    }

    if(zombie.isTouching(ninja)){
      ninja.destroy();
      shuriken.destroy();
    }

    if(mousePressedOver(zombie)) {
      shuriken.velocityX = +200;
    }

    if(shuriken.isTouching(zombie)){
      zombie.destroy();
      shuriken.velocityX = 0;
      shuriken.x = ninja.x;
      shuriken.y = ninja.y;
    }
    


   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}

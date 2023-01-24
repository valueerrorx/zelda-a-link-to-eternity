import { config } from "./config.js"

function createPlayer(game){
    game.anims.create({ key: 'walktowards', frames: game.anims.generateFrameNumbers('link', { start:0, end:9 }),frameRate: 14  });
    game.anims.create({ key: 'walkaway', frames: game.anims.generateFrameNumbers('link', { start:20, end:29 }),frameRate: 14 });
    game.anims.create({ key: 'walkleft', frames: game.anims.generateFrameNumbers('link', { start:10, end:19 }),frameRate: 14 });
    
    

    config.link = game.matter.add.sprite(config.linkstatus.x, config.linkstatus.y, 'link');
    config.link.setScale(0.2);
    config.link.setCircle(8);
    config.link.setFixedRotation(true);
    config.link.setDepth(25);
    config.link.body.name = "link"


   
      
    game.input.keyboard.on('keydown-A', function (event) {
        let boomerang = game.matter.add.sprite(config.link.x, config.link.y, 'boomerang');
        boomerang.setScale(0.05)
        boomerang.setDepth(100)
        if (boomerang){
                
                boomerang.exists = true;
                boomerang.lifespan=1500;  //kill after 2500 ms 
                boomerang.setCircle(6);
                
              
               
                boomerang.setVelocityX(10)
                //boomerang.setVelocityY(Math.sin(boomerang.angle) * 1)
        }
 
     });




   
   
}

export {createPlayer}

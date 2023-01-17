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
   
}

export {createPlayer}

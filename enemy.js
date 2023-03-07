import { config } from "./config.js"

function createEnemy(game){

    game.anims.create({ key: 'enemywalktowards', frames: game.anims.generateFrameNumbers('soldier', { start:0, end:3 }),frameRate: 4  });
    game.anims.create({ key: 'enemywalkaway', frames: game.anims.generateFrameNumbers('soldier', { start:12, end:15 }),frameRate: 4 });
    game.anims.create({ key: 'enemywalkright', frames: game.anims.generateFrameNumbers('soldier', { start:4, end:7 }),frameRate: 4 });
    game.anims.create({ key: 'enemywalkleft', frames: game.anims.generateFrameNumbers('soldier', { start:8, end:11 }),frameRate: 4 });
    

    let soldier = game.matter.add.sprite(300, 200, 'soldier');

    soldier.setFixedRotation(true);
    soldier.setDepth(25);
    soldier.body.name = "soldier"

    return soldier

}


    


export {createEnemy}

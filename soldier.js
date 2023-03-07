import { config } from "./config.js"

function createSoldier(game){
    game.anims.create({ key: 'soldierwalktowards', frames: game.anims.generateFrameNumbers('soldier', { start:0, end:3 }),frameRate: 4  });
    game.anims.create({ key: 'soldierwalkaway', frames: game.anims.generateFrameNumbers('soldier', { start:12, end:15 }),frameRate: 4 });
    game.anims.create({ key: 'soldierwalkleft', frames: game.anims.generateFrameNumbers('soldier', { start:8, end:11 }),frameRate: 4 });
    game.anims.create({ key: 'soldierwalkright', frames: game.anims.generateFrameNumbers('soldier', { start:4, end:7 }),frameRate: 4 });
    

    config.soldier = game.matter.add.sprite(300, 300, 'soldier');
    config.soldier.setFixedRotation(true);
    config.soldier.setDepth(25);
    config.soldier.body.name = "soldier"
}




export {createSoldier}

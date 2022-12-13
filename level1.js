import { config } from "./config.js"
import { playercontrol } from "./control.js"
import { createMap } from "./initmap.js"
import { createPlayer } from "./player.js"
import { checkCollisions } from "./collisionhandler.js"

class Level1 {
    create(){
        createMap(1, this)
        createPlayer(this)

        this.matter.world.setBounds(0, 0, config.map.widthInPixels, config.map.heightInPixels);
        config.cursors = this.input.keyboard.createCursorKeys();

        config.camera = this.cameras.main;
        config.camera.setBounds(0,0, config.map.widthInPixels, config.map.heightInPixels)
        config.camera.startFollow(config.link, true, 0.05, 0.05)

        config.fog = this.add.tileSprite(0, 0, config.map.widthInPixels, config.map.heightInPixels, 'fog').setOrigin(0,0);
        config.fog.setDepth(100);


        checkCollisions(this)
 
    }
    update(){

        playercontrol()

        config.fog.x = config.camera.scrollX*0.2;
        config.fog.y = config.camera.scrollY*0.2;

    }
}

export { Level1 }















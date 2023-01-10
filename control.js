import { config } from "./config.js"

function playercontrol(){
        if (config.cursors.left.isDown)    {
            config.link.setVelocityX(-3);
            config.link.setFlipX(false);
        }
        else if (config.cursors.right.isDown)  {
            config.link.setVelocityX(3);
            config.link.setFlipX(true);
        }
        else  { config.link.setVelocityX(0);  }

        if (config.cursors.up.isDown)  {config.link.setVelocityY(-3);}
        else if (config.cursors.down.isDown )  { config.link.setVelocityY(3);}
        else  { config.link.setVelocityY(0); }

        // handle animations separately
        if (config.cursors.left.isDown || config.cursors.right.isDown)    {  config.link.anims.play('walkleft', true);}
        else if (config.cursors.down.isDown )  {config.link.anims.play('walktowards', true);}
        else if (config.cursors.up.isDown)  {config.link.anims.play('walkaway', true);}
        else {config.link.anims.stop();}
}

export {playercontrol}
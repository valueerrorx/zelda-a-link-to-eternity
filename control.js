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

function soldiercontrol(){

    var angle = Math.atan2(config.link.y - config.soldier.y,  config.link.x - config.soldier.x)

    config.soldier.setVelocityX(Math.cos(angle) )
    config.soldier.setVelocityY(Math.sin(angle) )

    if (angle > 2.5 || angle < -1.5) { config.soldier.anims.play('soldierwalkleft', true)  }
    if (angle < 2.5 && angle > 1) { config.soldier.anims.play('soldierwalktowards' , true) }
    if (angle < 1 && angle > -0.5) { config.soldier.anims.play('soldierwalkright' , true) }
    if (angle < -0.5 && angle > -1.5) { config.soldier.anims.play('soldierwalkaway' , true) }


}



export {playercontrol, soldiercontrol}

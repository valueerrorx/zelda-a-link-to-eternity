import { config } from "./config.js"

function checkCollisions(game){
    game.matter.world.on("collisionstart", (event, bodyA, bodyB) => {


        // if((bodyA.name == "boom" || bodyB.name == "boom") && bodyA.name !== "link" && bodyB.name !== "link" ) {
            
        //     if (bodyA.name == "boom") {console.log(bodyA );  bodyA.destroy(true);}
        //     if (bodyB.name == "boom") {console.log(bodyB );  bodyB.destroy(true);}
        // }



        // handle different mapswitch actions
        if((bodyA.type == "mapswitch" && bodyB.name == "link") || (bodyB.type == "mapswitch" && bodyA.name == "link")) {
           
            let linkx = config.link.x
            let linky = config.link.y
           
            if(linky <= 40 ){ 
                config.linkstatus.y = config.map.heightInPixels - 25 
                config.linkstatus.x =  linkx
            }
            else if (linky > config.map.heightInPixels - 40) {
                config.linkstatus.y = 25 
                config.linkstatus.x = linkx
            }
            else if (linkx < 40) {
                config.linkstatus.x = config.map.widthInPixels - 25 
                config.linkstatus.y =  linky

            }
            else if ( linkx > config.map.widthInPixels - 40 ) {
                config.linkstatus.x =  25 
                config.linkstatus.y =  linky
            }
            else  {
                config.linkstatus.x =  linkx
                config.linkstatus.y =  linky
            }

            if (bodyA.type == "mapswitch"){ game.scene.start( bodyA.name ) }
            if (bodyB.type == "mapswitch"){ game.scene.start( bodyB.name ) }
        }
    });
}

export {checkCollisions}
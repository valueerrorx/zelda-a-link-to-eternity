import { config } from "./config.js"

function checkCollisions(game){

    game.matter.world.on("collisionstart", (event, bodyA, bodyB) => {
        
        // handle different mapswitch actions
        if((bodyA.type == "mapswitch" && bodyB.name == "link") || (bodyB.type == "mapswitch" && bodyA.name == "link")) {
            let mapswitch = bodyA.type === "mapswitch" ?  bodyA : bodyB 
           
            //reposition link
            let x = config.link.x
            let y = config.link.y

            if (config.link.x < 50) { x = config.map.widthInPixels - 40}        //link geht links raus
            if (config.link.x > config.map.widthInPixels - 50 )  { x = 40 }     // link geht rechts raus
            if (config.link.y < 50) { y =  config.map.heightInPixels - 40 }     // link geht oben raus
            if (config.link.y > config.map.heightInPixels - 50) { y = 40 }      // link geht unten raus

            config.linkstatus= {oldmap: config.map, x: x, y:y}
            
            console.log(`Switching to map: ${mapswitch.name}`)
            game.scene.start(mapswitch.name);
    
        }
    });





}


export {checkCollisions}

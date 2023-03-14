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
    config.link.setCollisionGroup(-1)
    config.link.setOnCollide((event)=>{
        if (event.bodyA.name === "soldier" || event.bodyB.name === "soldier") {
            
            game.scene.start('gameover')
        }
    })
   
      
    game.input.on('pointerdown', function (pointer) {
        if (pointer.rightButtonDown()){
            let boomerang = game.matter.add.sprite(config.link.x, config.link.y, 'boomerang');
            boomerang.setScale(0.05)
            boomerang.setDepth(100)
            boomerang.setCircle(6);
            boomerang.body.name = "boom"
            boomerang.setCollisionGroup(-1)
           
           

            boomerang.setOnCollide((event)=>{
                if (event.bodyA.name === "link" || event.bodyB.name === "link") {return}
                boomerang.tween.stop()
                boomerang.destroy()


                
                if (event.bodyA.name === "soldier" || event.bodyB.name === "soldier") {
                    let soldierbody = (event.bodyA.name === "soldier") ? event.bodyA : event.bodyB;
                    soldierbody.health -=1
                    if (soldierbody.health < 0) { config.soldier.destroy();  }
                }

            })

            boomerang.tween = game.tweens.add({
                targets: boomerang,
                x: pointer.x+config.camera.scrollX,
                y: pointer.y+config.camera.scrollY,
                ease: 'Power1',
                duration: 2000,
                angle:120,
                yoyo: true,
                repeat: 0,
                // onStart: function () { console.log('onStart');  },
                onComplete: function () { if(boomerang) {boomerang.destroy()} },
                // onYoyo: function () { console.log('onYoyo');  },
                // onRepeat: function () { console.log('onRepeat'); },
            });
        }   
    });
}


      
        


export {createPlayer}

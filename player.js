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
        boomerang.setCircle(6);
        

        if (config.link.frame.name >= 20 && config.link.frame.name <= 29    ) { //up
            console.log("up")
            game.tweens.add({
                targets: boomerang,
                x: 0,
                y: -400,
                ease: 'Power1',
                duration: 2000,
                angle:120,
                yoyo: true,
                repeat: 0,
                onStart: function () { console.log('onStart');  },
                onComplete: function () { console.log('onComplete');  },
                onYoyo: function () { console.log('onYoyo');  },
                onRepeat: function () { console.log('onRepeat'); },
            });


        }
        else if (config.link.frame.name >= 0 && config.link.frame.name <= 9    ) { //down
            console.log("down")
            game.tweens.add({
                targets: boomerang,
                x: 0,
                y: 400,
                ease: 'Power1',
                duration: 2000,
                angle:120,
                yoyo: true,
                repeat: 0,
                onStart: function () { console.log('onStart');  },
                onComplete: function () { console.log('onComplete');  },
                onYoyo: function () { console.log('onYoyo');  },
                onRepeat: function () { console.log('onRepeat'); },
            });
        }
        else if (config.link.flipX){ //rechts
            console.log("right")
            game.tweens.add({
                targets: boomerang,
                x: +400,
                y: 0,
                ease: 'Power1',
                duration: 2000,
                angle:120,
                yoyo: true,
                repeat: 0,
                onStart: function () { console.log('onStart');  },
                onComplete: function () { console.log('onComplete');  },
                onYoyo: function () { console.log('onYoyo');  },
                onRepeat: function () { console.log('onRepeat'); },
            });
        }
        else if (!config.link.flipX){ //links)
            console.log("right")
            game.tweens.add({
                targets: boomerang,
                x: -400,
                y: 0,
                ease: 'Power1',
                duration: 2000,
                angle:120,
                yoyo: true,
                repeat: 0,
                onStart: function () { console.log('onStart');  },
                onComplete: function () { console.log('onComplete');  },
                onYoyo: function () { console.log('onYoyo');  },
                onRepeat: function () { console.log('onRepeat'); },
            });
            
        }



               
               
 
     });
}


      
        





export {createPlayer}

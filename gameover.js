import { config } from "./config.js"

class gameover {
    create(){
        

       // config.fog = this.add.tileSprite(0, 0, config.map.widthInPixels, config.map.heightInPixels, 'fog').setOrigin(0,0);
      
        let text1 = this.add.text(100, 64, "Du bist TRASH",{ font: "65px Arial", fill: "#ffffff", align: "center" });


    }
    update(){

        

    }
}

export { gameover } 


import { config } from "./config.js"

function createMap(mapkey, game) {
    
    config.map = game.make.tilemap({ key: mapkey });
    let tiles = config.map.addTilesetImage('tileset');

    let floor0;
    let floor1;
    let floor2;
    let floor3;

    try {
        floor0 = config.map.createLayer('floor0', tiles, 0, 0);
        floor1 = config.map.createLayer('floor1', tiles, 0, 0);
        floor2 = config.map.createLayer('floor2', tiles, 0, 0);
        floor3 = config.map.createLayer('floor3', tiles, 0, 0);

        floor0.setDepth(1);
        floor1.setDepth(20);
        floor2.setDepth(40);
        floor3.setDepth(60);
    }
    catch(error)  {
        console.log(error)
    }


    let walls = config.map.getObjectLayer("walls");

    let points = []

 
    walls.objects.forEach( wall => {
        if (wall.ellipse === true){
            if (wall.type === "mapswitch"){
                console.log(wall.name)
                let wallobject = game.matter.add.circle(wall.x+wall.width/2, wall.y+wall.height/2, wall.width/2);
                wallobject.type = wall.type
                wallobject.name = wall.name
                wallobject.isStatic = true
            }
            else {  // this is a normal hitbox of some kind of blocking object 
                let wallobject = game.matter.add.circle(wall.x+wall.width/2, wall.y+wall.height/2, wall.width/2);
                wallobject.isStatic = true
            }
          

        }
        else {
            if(wall.name == "enemy1"){
                for (let i = 0; i< wall.polygon.length; i++){
                    points.push( wall.x + wall.polygon[i].x)
                    points.push( wall.y + wall.polygon[i].y)
                }
            }
            else {
                let polygon = game.add.polygon(wall.x, wall.y, wall.polygon);
                let wallobject = game.matter.add.gameObject( polygon, { shape:{ type:'fromVerts', verts: wall.polygon  } })
                wallobject.setPosition(wallobject.x + wallobject.body.centerOffset.x,  wallobject.y + wallobject.body.centerOffset.y )
                wallobject.setStatic(true)
            }
        }
    })

    // console.log(wall)  //so kommt das polygon aus tiled als objekt (wir können die punkte SO nicht in phaser nutzen (siehe let points = []
    //  daher gehen wir übers array drüber und bauen es neu auf
    // height: 0
    // id: 47
    // name: "enemy1"
    // polygon: Array(9)
    //         0: {x: 0, y: 0}
    //         1: {x: 60, y: -84}
    //         2: {x: 180, y: -51}
    //         3: {x: 222, y: -129}
    //         4: {x: 426, y: -42}
    //         5: {x: 366, y: 105}
    //         6: {x: 213, y: 39}
    //         7: {x: 84, y: -3}
    //         8: {x: 30, y: 36}
    // length: 9
    // rotation: 0
    // type: ""
    // visible: true
    // width: 0
    // x: 510
    // y: 633

    // let points = [ 50, 400, 200, 200, 350, 300, 500, 500, 700, 400 ];   // [ x1, y1, x2 , y2 , x3, y3 ]

    try {
        let curve = new Phaser.Curves.Spline(points);
        let graphics = game.add.graphics();
        graphics.lineStyle(1, 0xffffff, 1);
        graphics.setDepth(25)
        curve.draw(graphics, 64);

        let spider = game.add.follower(curve, points[0], points[1], 'spider');
        spider.setDepth(25)

        spider.startFollow({
            duration: 10000,
            rotateToPath: true,
            repeat: -1
        });

    }
    catch (e) {console.log(e)}








}


export {createMap}

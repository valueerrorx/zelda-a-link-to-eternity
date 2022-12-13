class Preload {
    preload(){
        this.load.image('spider', 'assets/spider.png');
        this.load.image('fog', 'assets/fog.png');
        this.load.image('tree', 'assets/tree.png');
        this.load.spritesheet('link', 'assets/zeldawalk.png', { frameWidth: 120, frameHeight: 130});

        this.load.tilemapTiledJSON('map1', 'assets/map1.json');
        this.load.tilemapTiledJSON('map2', 'assets/map2.json');
        this.load.tilemapTiledJSON('map5', 'assets/map5.json');
        this.load.tilemapTiledJSON('map4', 'assets/map4.json');

        this.load.image('tileset', 'assets/tileset.png');
    }
    create(){
       this.scene.start("map1");
    }
}

export { Preload }

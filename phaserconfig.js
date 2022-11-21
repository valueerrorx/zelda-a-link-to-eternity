// hier wird die spielweite konfiguration vorgenommen
let phaserconfig = {
    type: Phaser.Auto,
    width: 800,   //definiert die breite des viewports
    height: 480,
    parent: "container",
    backgroundColor: '#eeeeee',
    physics: {
        default: 'matter',
        matter: {
            gravity: { y : 0 },
            debug: true   // macht die hitboxen sichtbar/unsichtbar
        }
    }
}


export {phaserconfig}


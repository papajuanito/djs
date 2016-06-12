import Map from 'objects/Map';
import Character from 'objects/Character';

class MapState extends Phaser.State {

	preload() {

		this.game.load.image('tile', 'assets/img/tilebig.png');
        this.game.load.image('cube', 'assets/img/cube.png');

        this.game.load.atlasJSONHash('tileset', 'assets/img/tilesets/tiles.png', 'assets/img/tilesets/tiles.json');

        this.game.time.advancedTiming = true;

        // Add and enable the plug-in.
        this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));

        // This is used to set a game canvas-based offset for the 0, 0, 0 isometric coordinate - by default
        // this point would be at screen coordinates 0, 0 (top left) which is usually undesirable.
        this.game.iso.anchor.setTo(0.5, 0.2);
	}

	create() {

        this.game.map = new Map(this.game);
		
        this.game.map.load();

        if(!this.loaded) {
            this.game.player = new Character(this.game, this.game.map.tilesArray[0][6].isoX, this.game.map.tilesArray[0][6].isoY, 0, 'cube', 0, this.game.map.tilesGroup);
        }

        this.game.map.tileAdjacentTiles(this.game.map.tilesArray[0][6], this.game.player.stamina);

        // this.cursors = this.game.input.keyboard.createCursorKeys();

        this.game.input.keyboard.onDownCallback = function () {

            console.log(this.game.input.keyboard.event.keyCode);

            if (this.game.input.keyboard.event.keyCode == 73 ) {

                console.log(this.game.player.inventory.listItems());

                console.log('lets open the inventory');
            } else if(this.game.input.keyboard.event.keyCode == 69) {
                console.log(this.game.player.equipment.listItems());
            }
        };
	}

	update() {

        this.game.map.gridUpdate((tile) => {
            var tileFrom = [this.game.player.indexX, this.game.player.indexY],
                tileTo = [tile.indexX, tile.indexY];
            this.game.map.pathBetweenTiles(tileFrom, tileTo, path => {
                this.game.map.drawPath(path);
            });
        });
	}

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#a7aebe");
    }
}

export default MapState;
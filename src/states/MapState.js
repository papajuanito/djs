import Map from 'objects/Map';
import Character from 'objects/Character';

class MapState extends Phaser.State {

	preload() {
		this.game.load.image('tile', 'assets/img/tile.png');
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

        this.game.player = new Character(this.game, this.game.map.tilesArray[0][6].isoX, this.game.map.tilesArray[0][6].isoY, 0, 'cube', 0, this.game.map.tilesGroup)

        this.game.map.tileAdjacentTiles(this.game.map.tilesArray[0][6], this.game.player.stamina);

        this.game.map.moveMapObject(this.game.player, this.game.map.tilesArray[1][6])

	}

	update() {

	}
}

export default MapState;
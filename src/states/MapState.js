import Map from 'objects/Map';

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

		var self = this;
		self.game.map = new Map(self.game);
        self.game.map.load();
	}

	update() {

	}
}

export default MapState;
class Map {
	constructor(game) {
		this.game = game;
		this.tilesGroup = this.game.add.group();
		this.cursorPos = new Phaser.Plugin.Isometric.Point3();
		this.pathfinder = null;
	}

	load() {
		var self = this,
	        tile;

	    self.tilesArray = Map.createArray(7, 7);

	    // console.log(testTiles[5]);
	    var xPos,
	        yPos;

	    for (var x = 0; x < self.tilesArray.length; x++) {
	        for(var y = 0; y < self.tilesArray[x].length; y++) {
	            xPos = x * 38;
	            yPos = y * 38;

	            // self.tilesArray[x][y] = self.game.add.isoSprite(xPos, yPos, 0, 'tile', 0, self.tilesGroup);
	            self.tilesArray[x][y] = self.game.add.isoSprite(xPos, yPos, -36, 'tileset', 'tile20', self.tilesGroup);
	            self.tilesArray[x][y].index = 0;
	            self.tilesArray[x][y].indexY = y;
	            self.tilesArray[x][y].indexX = x;
	            self.tilesArray[x][y].anchor.set(0.5, 1);
	        }
	    }

	    // self.game.plugins.add;

	    self.pathfinder = self.game.plugins.add(Phaser.Plugin.PathFinderPlugin);
	    // self.pathfinder.setGrid(self.tilesArray, [0]);
	}

	static createArray(length) {
		var self = this;

	    var arr = new Array(length || 0),
	        i = length;

	    if (arguments.length > 1) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        while(i--) arr[length-1 - i] = self.createArray.apply(this, args);
	    }

	    return arr;
	}
}

export default Map;
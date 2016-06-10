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

	moveMapObject (mapObject, tile) {
		console.log(mapObject, tile);

		mapObject.isoX = tile.isoX;
		mapObject.isoY = tile.isoY;

	}

	//
	tileAdjacentTiles (tile, length) {
		var self = this;

		var adjacentTiles = [];

		// self.frame.forEach(function(isoTile) {
		// 	console.log(isoTile);
		// });

	    // group.forEach(function(isoTile) {
	    //     isoTile.tint = 0xffffff;
	    //     isoTile.adjacent = false;
	    // });

	    var indexX = tile.indexX;
	    var indexY = tile.indexY;

	    var stamina = length;
	    var limitX = (indexX + stamina) > this.tilesArray.length - 1 ? this.tilesArray.length - 1 : indexX + stamina;
	    var limitY = (indexY + stamina) > this.tilesArray.length - 1 ? this.tilesArray.length - 1 : indexY + stamina;
	    // var limitY = indexY ;

	    var startX = (indexX - stamina) < 0 ? 0 : indexX - stamina;
	    var startY = (indexY - stamina) < 0 ? 0 : indexY - stamina;

	    for(let x = startX; x <= limitX; x++) {
	        for(let y = startY; y <= limitY; y++) {


	            if(_.isUndefined(self.tilesArray[x][y])) return;

	            if(Math.abs(x - indexX) + Math.abs(y - indexY) <= stamina) {
	                self.tilesArray[x][y].adjacent = true;
	                self.tilesArray[x][y].tint = 0xf1f297;

	                adjacentTiles.push(self.tilesArray[x][y]);

	            } else {
	                self.tilesArray[x][y].adjacent = false;
	            }
	        }
	    }

	    // console.log(adjacentTiles);
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
class Map {
	constructor(game) {
		this.game = game;
		this.tilesGroup = this.game.add.group();
		this.cursorPos = new Phaser.Plugin.Isometric.Point3();
		this.pathfinder = null;
	}

	load() {
		// var self = this,
	 //        tile;

	    this.tilesArray = Map.createArray(10, 10);

	    // console.log(testTiles[5]);
	    let xPos,
	        yPos;

	    for (let x = 0; x < this.tilesArray.length; x++) {
	        for(let y = 0; y < this.tilesArray[x].length; y++) {
	            xPos = x * 38;
	            yPos = y * 38;

	            // self.tilesArray[x][y] = self.game.add.isoSprite(xPos, yPos, 0, 'tile', 0, self.tilesGroup);
	            this.tilesArray[x][y] = this.game.add.isoSprite(xPos, yPos, -36, 'tileset', 'tile20', this.tilesGroup);
	            this.tilesArray[x][y].index = 0;
	            this.tilesArray[x][y].indexY = y;
	            this.tilesArray[x][y].indexX = x;
	            this.tilesArray[x][y].anchor.set(0.5, 1);
	        }
	    }

	    // self.game.plugins.add;

	    this.pathfinder = this.game.plugins.add(Phaser.Plugin.PathFinderPlugin);
	    this.pathfinder.setGrid(this.tilesArray, [0]);
	}

	moveMapObject (mapObject, tile) {
		console.log(mapObject, tile);
		mapObject.isoX = tile.isoX;
		mapObject.isoY = tile.isoY;
	}

	//
	tileAdjacentTiles (tile, length) {

		var adjacentTiles = [];

		// self.frame.forEach(function(isoTile) {
		// 	console.log(isoTile);
		// });

	    // group.forEach(function(isoTile) {
	    //     isoTile.tint = 0xffffff;
	    //     isoTile.adjacent = false;
	    // });

	    this.tilesGroup.forEach(isoTile => {
	    	isoTile.tint = 0x363636;
	    });

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


	            if(_.isUndefined(this.tilesArray[x][y])) return;

	            if(Math.abs(x - indexX) + Math.abs(y - indexY) <= stamina) {
	                this.tilesArray[x][y].adjacent = true;
	                this.tilesArray[x][y].tint = 0xf1f297;

	                adjacentTiles.push(this.tilesArray[x][y]);

	            } else {
	                this.tilesArray[x][y].adjacent = false;
	                // this.tilesArray[x][y].tint = 0x000000;
	            }
	        }
	    }

	    // console.log(adjacentTiles);
	}

	pathBetweenTiles(tileFrom, tileTo, callback) {
	    this.pathfinder.setCallbackFunction(callback);
	    this.pathfinder.preparePathCalculation(tileFrom, tileTo);
	    this.pathfinder.calculatePath();
	}

	drawPath(path) {
		this.tilesGroup.forEach(tile => {
			tile.tint = tile.adjacent ? 0xf1f297 : 0x363636;
		});

		_.each(path, (tile, index) => {
			this.tilesArray[tile.x][tile.y].tint = 0x70ff7a;
		});
	}

	gridUpdate(callback) {

		this.game.iso.unproject(this.game.input.activePointer.position, this.cursorPos);

		this.nextTile = null;

		this.tilesGroup.forEach(tile => {
			var inBounds = tile.isoBounds.containsXY(this.cursorPos.x, this.cursorPos.y);

			if(inBounds && tile.adjacent) {
				callback(tile);
			}
		});
	}

	static createArray(length) {
	    var arr = new Array(length || 0),
	        i = length;

	    if (arguments.length > 1) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        while(i--) arr[length-1 - i] = this.createArray.apply(this, args);
	    }

	    return arr;
	}
}

export default Map;
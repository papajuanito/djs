djs.withMovement = (function () {

	function moveToTile(tile) {

		//position x and y position of character sprite
		this.isoX = tile.isoX;
		this.isoY = tile.isoY;

		//Update position of character in the 2d array 
		this.indexX = tile.indexX;
		this.indexY = tile.indexY;
	}

	//This function retrieves the adjacent tiles using stamina 
	function adjacentTiles(tile, tiles, group) {
		var self = this;

		// self.frame.forEach(function(isoTile) {
		// 	console.log(isoTile);
		// });

	    group.forEach(function(isoTile) {
	        isoTile.tint = 0xffffff;
	        isoTile.adjacent = false;
	    });

	    var indexX = tile.indexX;
	    var indexY = tile.indexY;

	    var stamina = self.stamina;
	    var limitX = (indexX + stamina) > tiles.length - 1 ? tiles.length - 1 : indexX + stamina;
	    var limitY = (indexY + stamina) > tiles.length - 1 ? tiles.length - 1 : indexY + stamina;
	    // var limitY = indexY ;

	    var startX = (indexX - stamina) < 0 ? 0 : indexX - stamina;
	    var startY = (indexY - stamina) < 0 ? 0 : indexY - stamina;

	    for(x = startX; x <= limitX; x++) {
	        for(y = startY; y <= limitY; y++) {

	            if(_.isUndefined(tiles[x][y])) return;

	            if(Math.abs(x - indexX) + Math.abs(y - indexY) <= stamina) {
	                tiles[x][y].adjacent = true;
	                tiles[x][y].tint = 0xf1f297;
	            } else {
	                tiles[x][y].adjacent = false;
	            }
	        }
	    }
	}

	return function() {
		this.moveToTile = moveToTile;
		this.adjacentTiles = adjacentTiles;
	};
})();

// djs.withMovement.call(djs.Character.prototype);

// var character = new djs.Character();
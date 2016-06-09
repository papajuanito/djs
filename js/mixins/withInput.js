djs.withInput = (function () {

	function gridInput() {

		var self = this;

		self.game.input.onDown.add(function() {
            if(_.isNull(self.nextTile) || _.isUndefined(self.nextTile)) return;
            self.moveToTile(self.nextTile);
            self.adjacentTiles(self.nextTile, self.game.map.tilesArray, self.game.map.tilesGroup);
        });
	}

	function gridInputUpdate() {

		var self = this;

		self.game.iso.unproject(self.game.input.activePointer.position, self.cursorPos);

		self.nextTile = null;

		self.game.map.tilesGroup.forEach(function(tile) {
			var inBounds = tile.isoBounds.containsXY(self.cursorPos.x, self.cursorPos.y);

			if(inBounds && tile.adjacent) {
				// self.adjacentTiles(tile, self.game.map.tilesArray, self.game.map.tilesGroup);
				self.game.map.pathBetweenTiles([self.indexX, self.indexY],[tile.indexX, tile.indexY], function (path) {
					self.game.map.drawPath(path);
				});

				self.nextTile = tile;
			}

			// console.log(inBounds);
		});
	}

	return function() {
		this.gridInput = gridInput;
		this.gridInputUpdate = gridInputUpdate;
	};
})();
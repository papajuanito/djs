djs.withInput = (function () {

	function gridInput() {

		var self = this;

		self.game.input.onDown.add(function() {
            if(_.isNull(self.game.map.selectedTile) || _.isUndefined(self.game.map.selectedTile)) return;

            self.moveToTile(self.game.map.selectedTile);
            self.adjacentTiles(self.game.map.selectedTile, self.game.map.tilesArray, self.game.map.tilesGroup);
        });
	}

	function gridInputUpdate() {

		var self = this;

		self.game.iso.unproject(self.game.input.activePointer.position, self.cursorPos);

		self.game.map.tilesGroup.forEach(function(tile) {
			var inBounds = tile.isoBounds.containsXY(self.cursorPos.x, self.cursorPos.y);

			if(inBounds && tile.adjacent) {
				// self.adjacentTiles(tile, self.game.map.tilesArray, self.game.map.tilesGroup);
				self.findPathToTile(tile);
			}

			// console.log(inBounds);
		});
	}

	return function() {
		this.gridInput = gridInput;
		this.gridInputUpdate = gridInputUpdate;
	};
})();
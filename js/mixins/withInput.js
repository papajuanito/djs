djs.withInput = (function () {

	function gridInput() {

		var self = this;

		self.game.input.onDown.add(function() {
            if(_.isNull(self.game.map.selectedTile) || _.isUndefined(self.game.map.selectedTile)) return;

            self.moveToTile(self.game.map.selectedTile);
            self.adjacentTiles(self.game.map.selectedTile, self.game.map.tilesArray, self.game.map.tilesGroup);
        });
	}

	return function() {
		this.gridInput = gridInput;
	};
})();

// djs.withMovement.call(djs.Character.prototype);

// var character = new djs.Character();
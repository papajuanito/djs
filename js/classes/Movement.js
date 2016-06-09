djs.Movement = function(game, x, y, z, key, frame) {
	Phaser.Plugin.Isometric.IsoSprite.call(this, game, x, y, z, key, frame);

	this.game = game;
};

djs.Movement.prototype = Object.create(Phaser.Plugin.Isometric.IsoSprite.prototype);
djs.Movement.prototype.constructor = djs.Movement;

djs.Movement.prototype.adjacentTiles = function(tile, tiles, group) {
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
};
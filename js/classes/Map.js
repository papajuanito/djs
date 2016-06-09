djs.Map = function(game) {
	this.game = game;
	this.tilesGroup = this.game.add.group();
	this.cursorPos = new Phaser.Plugin.Isometric.Point3();;
	this.selectedTile;
	// this.tilesArray self.createArray(15, 15,) 
	//this.stamina = 3;
};

djs.Map.prototype = Object.create(djs.Map.prototype);
	
djs.Map.prototype.load = function() {

	var self = this,
        tile;

    self.tilesArray = self.createArray(20, 20);

    // console.log(testTiles[5]);
    var xPos,
        yPost;

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

    self.pathfinder = self.game.plugins.add(Phaser.Plugin.PathFinderPlugin);

    
    self.pathfinder.setGrid(self.tilesArray, [0]);
    // self.pathfinder._easyStar.enableDiagonals();

};

djs.Map.prototype.findPathTo = function (tileX, tileY) {

    var self = this;


    if(tileX == self.pathfinder.oldX && tileY == self.pathfinder.oldY) {
        _.each(self.pathfinder.oldPath, function(tile, index) {
            self.tilesArray[tile.x][tile.y].tint = 0x70ff7a;
        });

        return;
    };

    self.pathfinder.setCallbackFunction(function(path) {
        path = path || [];

        _.each(path, function(tile, index) {
            self.tilesArray[tile.x][tile.y].tint = 0x70ff7a;
        });

        if(path.length) {
            self.pathfinder.oldX = tileX;
            self.pathfinder.oldY = tileY;
            self.pathfinder.oldPath = path;
        }
    });

    self.pathfinder.preparePathCalculation([self.game.player.indexX, self.game.player.indexY], [tileX,tileY]);
    self.pathfinder.calculatePath();
};

djs.Map.prototype.input = function() {
	var self = this;

	// console.log(self.cursorPos);

	self.game.iso.unproject(self.game.input.activePointer.position, self.cursorPos);

    self.tilesGroup.forEach(function(tile) {
        tile.tint = tile.adjacent ? 0xf1f297 : 0xffffff;
    });

	self.tilesGroup.forEach(function (tile) {
        // console.log('here');
        var inBounds = tile.isoBounds.containsXY(self.cursorPos.x, self.cursorPos.y);
        // If it does, do a little animation and tint change.
        if (!tile.selected && inBounds) {
            tile.selected = true;
            if(tile.adjacent) {
                // tile.tint = 0x70ff7a;
                self.selectedTile = tile;
            } else {
                self.selectedTile = null;
                tile.tint = 0xf29797;
            }
            // game.add.tween(tile).to({ isoZ: 4 }, 200, Phaser.Easing.Quadratic.InOut, true);
        }
        // If not, revert back to how it was.
        else if (tile.selected && !inBounds && tile.adjacent) {
            tile.selected = false;
            tile.tint = 0xf1f297;
            // game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
        } else if(tile.selected && !inBounds) {
            tile.selected = false;
            tile.tint = 0xffffff;
        }
    });

    if(_.isNull(self.selectedTile) || _.isUndefined(self.selectedTile)) return;

    self.findPathTo(self.selectedTile.indexX, self.selectedTile.indexY);
};

djs.Map.prototype.createArray = function(length) {
	var self = this;

    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = self.createArray.apply(this, args);
    }

    return arr;
};

// djs.Character.prototype.draw = function () {
// 	this.game.add.existing(this);
// 	this.tint = 0x86bfda;
//     this.anchor.set(0.5);

//     this.game.physics.isoArcade.enable(this);
// }
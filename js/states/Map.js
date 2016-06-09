djs.Map = function(game) {
    this.game = game,
    this.player,
    this.isoGroup,
    this.selectedTile,
    this.cursorPos
};

djs.Map.prototype = {    

    preload: function () {
        var self = this;

        self.game.load.image('tile', 'assets/img/tile.png');
        self.game.load.image('cube', 'assets/img/cube.png');

        game.load.atlasJSONHash('tileset', 'assets/img/tilesets/tiles.png', 'assets/img/tilesets/tiles.json');

        self.game.time.advancedTiming = true;

        // Add and enable the plug-in.
        self.game.plugins.add(new Phaser.Plugin.Isometric(self.game));

        // This is used to set a game canvas-based offset for the 0, 0, 0 isometric coordinate - by default
        // this point would be at screen coordinates 0, 0 (top left) which is usually undesirable.
        self.game.iso.anchor.setTo(0.5, 0.2);
    },

    create: function () {

        var self = this;

        self.game.map = new djs.Map(self.game);
        self.game.map.load();

        self.game.player = new djs.Character(self.game, self.game.map.tilesArray[0][6].isoX, self.game.map.tilesArray[0][6].isoY, 0, 'cube', 0, self.game.map.tilesGroup);
        self.game.player.load(self.game.map.tilesArray[0][6]);
        self.game.player.adjacentTiles(self.game.map.tilesArray[0][6], self.game.map.tilesArray, self.game.map.tilesGroup);

        self.game.player.gridInput();
        
    },

    update: function () {
        var self = this;
        self.game.player.gridInputUpdate();
        self.game.map.update();
    }, 
    render: function()
    {
        game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
    }
};

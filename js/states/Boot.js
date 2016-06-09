var djs = {};

djs.Boot = function(game) {
	this.game = game;
};

djs.Boot.prototype = {

	create: function() {
		this.game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

        //Initial Load State
        this.game.state.start('load');
	}

};

djs.Menu = function(game) {
    this.game = game;
};

djs.Menu.prototype = {
    create: function () {
        // this.game.add.plugin(Phaser.Plugin.Debug);
        // game.add.image(95, 150, 'boiler-logo');
        // this.game.add.plugin(Phaser.Plugin.Inspector);

        this.game.state.start('map');
    }
};

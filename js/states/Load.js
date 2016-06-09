djs.Load = function(game) {
    this.game = game;
};

djs.Load.prototype = {

    create: function() {        
        this.game.state.start('menu');
    }

};

var w = 800,
  h = 600;

/*
For Fullscreen put this code:

var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('boot', djs.Boot);
game.state.add('load', djs.Load);
game.state.add('menu', djs.Menu);
game.state.add('map', djs.Map);

game.state.start('boot');

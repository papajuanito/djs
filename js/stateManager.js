


var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    h = w.innerHeight|| e.clientHeight|| g.clientHeight;

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

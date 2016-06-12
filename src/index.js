import BootState from 'states/BootState';
import MapState from 'states/MapState';
import EquipmentViewState from 'states/EquipmentViewState';

class Game extends Phaser.Game {

	constructor() {

		var w = window,
		    d = document,
		    e = d.documentElement,
		    g = d.getElementsByTagName('body')[0],
		    x = w.innerWidth || e.clientWidth || g.clientWidth,
		    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

		super(x, y, Phaser.AUTO, 'content', null);
		this.state.add('BootState', BootState, false);
		this.state.add('MapState', MapState, false);
		this.state.add('EquipmentViewState', EquipmentViewState, false);
		this.state.start('BootState');
	}

}

new Game();
import BootState from 'states/BootState';
import MapState from 'states/MapState';

class Game extends Phaser.Game {

	constructor() {
		super(500, 500, Phaser.AUTO, 'content', null);
		this.state.add('BootState', BootState, false);
		this.state.add('MapState', MapState, false);
		this.state.start('BootState');
	}

}

new Game();
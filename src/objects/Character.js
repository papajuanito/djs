import Inventory from 'objects/Inventory';
import Equipment from 'objects/Equipment';
import Item from 'objects/Item';

import KnightStatCollection from 'objects/Stats/Classes/KnightStatCollection';
import StatType from 'objects/Stats/StatType';


class Character extends Phaser.Plugin.Isometric.IsoSprite {
	constructor(game, isoX, isoY, isoZ, key, frame) {
		super(game, isoX, isoY, isoZ, key, frame);

		// this.game = game;

		this.stats = new KnightStatCollection();

		console.log(this.stats);

		// this.load();

		// console.log(this);
		this.game.add.existing(this);
		this.tint = 0x86bfda;
	    this.anchor.set(0.5);
	    this.indexX = 0;
	    this.indexY = 6;

	    // this.inventory = new Inventory();
	    this.inventory = new Inventory(this.game);
	    // this.loadEquipment();

	    // console.log(this.inventory.listItems());

	    this.game.physics.isoArcade.enable(this);

	}
	
	load() {

		let player = store.get('player');

		let items = store.get('items');

		if(_.isUndefined(player)) {

			console.log('writing');

			player = {
				stamina: 3,
				class: 1,
				level: 30,
				inventory: {
					equipment: [
						1, null, 3, null, 5, 6
					],
					items: [
						1, 2, 3, 4, 5, 10
					]
				}
			};

			store.set('player', player);
		}

		this.stamina = player.stamina;

		console.log(player.inventory.equipment);

		player.inventory.equipment.forEach(function(itemId, index) {
			if(!_.isNull(itemId)) {
				console.log(items[itemId]);
			};
		});
	}

	loadEquipment() {
		var helmet = new Item('Helmet of Valor', 'Helmet of a valorous knight.', 'rare', 'helm', true);
		var torso = new Item('Wait of Valor', 'Waist of a valorous knight.', 'rare', 'waist', true);
		this.inventory.addToInventory(helmet);
		this.inventory.addToInventory(torso);
	}
}

export default Character;
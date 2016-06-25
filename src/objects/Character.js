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

		// this.onItemEqui

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

	    this.setupSignalEvents();

	    this.loadEquipment();

	}

	test(item) {
		console.log('test', item);
	}

	setupSignalEvents() {
		this.inventory.onItemEquip.add(this.test, this);
	}

	loadEquipment() {
		var helmet = new Item('Helmet of Valor', 'Helmet of a valorous knight.', 'rare', 'helm', true);
		var torso = new Item('Wait of Valor', 'Waist of a valorous knight.', 'rare', 'waist', true);
		this.inventory.addToInventory(helmet);
		this.inventory.addToInventory(torso);
	}
}

export default Character;
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

		// console.log(this);
		this.inventory.onItemEquip.add(this.stats.addStatModifier, this.stats);
	}

	loadEquipment() {
		var items = [
			{
				"id" : 0,
				"name": "Helmet of Valor",
				"description": "Helmet of a valorous knight.",
				"rarity": "rare",
				"equipped": true,
				"type": "helm",
				"modifiers": [
					{
						"id": 0,
						"stat": "STRENGTH",
						"value": 5,
						"type": 2
					},
					{
						"id": 1,
						"stat": "FAITH",
						"value": 2,
						"type": 2
					}
				]
			},
			{
				"id" : 1,
				"name": "Waist of Valor",
				"description": "Waist of a valorous knight.",
				"rarity": "rare",
				"type": "waist",
				"equipped": true,
				"modifiers": [
					{
						"id": 0,
						"stat": "STRENGTH",
						"value": 5,
						"type": 2
					},
					{
						"id": 1,
						"stat": "FAITH",
						"value": 2,
						"type": 2
					}
				]
			}
		];

		items.forEach( item => {
			this.inventory.addToInventory(
				new Item(item.name, item.description, item.rarity, item.type, item.equipped, item.modifiers)
			);
		});

		// var helmet = new Item('Helmet of Valor', 'Helmet of a valorous knight.', 'rare', 'helm', true);
		// var torso = new Item('Wait of Valor', 'Waist of a valorous knight.', 'rare', 'waist', true);
		// this.inventory.addToInventory(helmet);
		// this.inventory.addToInventory(torso);
	}
}

export default Character;
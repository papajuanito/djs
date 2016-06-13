import Item from 'objects/Item';

class Inventory {
	constructor(game) {
		this.game = game;
		this.items = [];
		this.equipment = [6];
	}

	listItems() {
		return this.items;
	}

	addToInventory(item) {

		console.log(item);

		if(item.equipped) {
			this.equipment[item.type] = item;
		} else {
			this.items.push(item);
		}
	}

	removeFromInventory(index) {

		// console.log(index);

		this.items[index].label.destroy();

		this.items.splice(index, 1);

		// this.items[]

		// this.displayItems();
	}

	displayEquipment() {
		console.log(this.equipment);
	}

	displayItems() {
		console.log('Displaying Items');

		var style = { font: "32px Arial", fill: "#ff0044", wordWrap: true, align: "center", backgroundColor: "#ffff00" };

		let item;

		for(let x = 0; x < this.items.length; x++) {

			item = this.items[x];

			item.label = this.game.add.text(100 * x,100 * x, item.name, style);
			item.label.anchor.setTo(0.5);

			item.label.inputEnabled = true;

			item.label.events.onInputDown.add(function() {
				this.removeFromInventory(x);
			}, this);
		}
	}
}

export default Inventory;
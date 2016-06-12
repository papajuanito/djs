import Item from 'objects/Item';

class Inventory {
	constructor() {
		this.items = [];
		let item = new Item('Claymore', 'Huge Sword', 'rare', 'weapon');
		this.addItem(item);

	}

	listItems() {
		return this.items;
	}

	addItem(item) {
		this.items.push(item);
	}
}

export default Inventory;
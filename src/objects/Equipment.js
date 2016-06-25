import Inventory from 'objects/Inventory';
import Item from 'objects/Item';


class Equipment extends Inventory {
	constructor() {
		console.log('Equipment');
		super();
		this.load();
	}

	equipItem(item) {
		this.items.push(item);
	}
}

export default Equipment;
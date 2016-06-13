import Inventory from 'objects/Inventory';
import Item from 'objects/Item';


class Equipment extends Inventory {
	constructor() {
		console.log('Equipment');
		super();
		this.load();
	}

	load() {
		var helmet = new Item('Helmet of Valor', 'Helmet of a valorous knight.', 'rare', 'helm');
		this.equipItem(helmet);
	}

	equipItem(item) {
		this.items.push(item);
	}
}

export default Equipment;
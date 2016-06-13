class Item {
	constructor(name, description, rarity, type, equipped = false) {
		console.log('Item');

		this.RARITY = {
			common : 0,
			uncommon: 1,
			rare: 2,
			epic: 3,
			legendary: 4
		};

		this.TYPE = {
			helm: 0,
			torso: 1,
			gloves: 2,
			legs: 3,
			waist: 4,
			ring: 5
		};

		this.name = name;
		this.description = description;
		this.rarity = this.RARITY[rarity];
		this.type = this.TYPE[type];

		this.equipped = equipped;
	}
}

export default Item;
var Item = function(game, name, description, rarity, itemType) {
	this.game = game;
	this.name = name;
	this.equipped = false;
	this.description = description;
	this.rarity = Item.RARITY[rarity];
	this.itemType = Item.TYPE[itemType];
};

Item.RARITY = {
	common : 0,
	uncommon: 1,
	rare: 2,
	epic: 3,
	legendary: 4
};

Item.TYPE = {
	helm: 0,
	torso: 1,
	gloves: 2,
	legs: 3,
	waist: 4,
	ring: 5
};
var Inventory = function(game) {
	this.game = game;

	//Array containing all of the basic items
	this.MainInventory = [];

	//Array containing all of the equipment used by the player
	this.EquipInventory = [];
}

Inventory.prototype.getItems = function() {
	var item = new Item(this.game, 'Claymore', 'Huge Sword', 'rare', 'helm');
	this.MainInventory.push(item);

	return this.MainInventory;
};
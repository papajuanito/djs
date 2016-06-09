djs.Character = function(game, isoX, isoY, isoZ, key, frame) {

	Phaser.Plugin.Isometric.IsoSprite.call(this, game, isoX, isoY, isoZ, key, frame);
	
	this.game = game;
	this.stamina = 5;
};

djs.Character.prototype = Object.create(Phaser.Plugin.Isometric.IsoSprite.prototype);
djs.Character.prototype.constructor = djs.Character;

//mixins
djs.withMovement.call(djs.Character.prototype);
djs.withInput.call(djs.Character.prototype);

djs.Character.prototype.load = function (tile) {
	this.game.add.existing(this);
	this.tint = 0x86bfda;
    this.anchor.set(0.5);
    this.indexX = tile.indexX;
    this.indexY = tile.indexY;

    this.game.physics.isoArcade.enable(this);
}


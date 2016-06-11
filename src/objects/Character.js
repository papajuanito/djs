class Character extends Phaser.Plugin.Isometric.IsoSprite {
	constructor(game, isoX, isoY, isoZ, key, frame) {
		super(game, isoX, isoY, isoZ, key, frame);

		// this.game = game;

		this.stamina = 3;

		// console.log(this);
		this.game.add.existing(this);
		this.tint = 0x86bfda;
	    this.anchor.set(0.5);
	    this.indexX = 0;
	    this.indexY = 6;

	    this.game.physics.isoArcade.enable(this);

	}
}

export default Character;
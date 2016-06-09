class BootState extends Phaser.State {
	create() {
		this.game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

        //Initial Load State
        this.game.state.start('MapState');
	}
}

export default BootState;
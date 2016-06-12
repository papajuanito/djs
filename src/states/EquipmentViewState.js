
class EquipmentViewState extends Phaser.State {

	preload() {
		
	}

	create() {
		// this.game.state.start('MapState');

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.SPACEBAR
        ]);
	}

	update() {
        if (this.cursors.up.isDown) {
            this.game.player.body.velocity.y = -speed;
        }
        else if (this.cursors.down.isDown) {
            
            this.game.state.start('MapState');
            
            // this.game.player.body.velocity.y = speed;
        }
        else {
            this.game.player.body.velocity.y = 0;
        }
	}

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#a7aebe");
    }
}

export default EquipmentViewState;
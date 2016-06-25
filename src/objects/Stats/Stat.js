import StatType from 'objects/Stats/StatType';

// console.log(StatType.enumValues);

class Stat {

	constructor(type, value) {
		this.type = type;
		this.baseValue = value;
		this.modValue = value;
		this.statModifiers = [];
	}

	addModifier(modifier) {
		this.statModifiers.push(modifier);
		this.updateModifiers();
	}

	removeModifier() {
		// this.statModifiers();
	}

	clearModifiers() {
		this.statModifiers = [];
	}

	updateModifiers() {
		this.modValue = 0;

		let sum = 0;
		this.statModifiers.forEach( modifier => {
			sum += modifier.value;
		});

		this.modValue = this.statModifiers[0].apply(this.baseValue + this.modValue, sum);
	}
}

export default Stat;
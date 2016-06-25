import StatType from 'objects/Stats/StatType';

// console.log(StatType.enumValues);

class Stat {

	constructor(type, value) {
		this.type = type;
		this.baseValue = value;
		this.value = value;
		this.statModifiers = [];
	}

	addModifier(modifier) {
		this.statModifiers.push(modifier);
	}

	clearModifiers() {
		this.statModifiers = [];
	}

	updateModifiers() {
		console.log('RUN THIS TO CALCULATE NEW MODIFIERS AND STAT VALUES');
	}
}

export default Stat;
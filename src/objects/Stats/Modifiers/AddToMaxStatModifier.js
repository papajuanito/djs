import StatModifier from 'objects/Stats/StatModifier';

class AddToMaxStatModifier extends StatModifier {
	constructor(value, stacks = true) {
		super(value, stacks);
	}

	apply(statValue, modValue) {
		return modValue;
	}
}

export default AddToMaxStatModifier;
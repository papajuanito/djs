import Stat from 'objects/Stats/Stat';
import StatType from 'objects/Stats/StatType';
import * as StatModifiers from 'objects/Stats/Modifiers/modifiers';

class StatCollection {
	constructor() {
		this.stats = [5];
		this.configureStats();
	}

	/**
	 * Retrieves Stat from collection by StatType
	 * @param  {StatType} statType
	 * @return {Stat}
	 */
	getStat(statType) {

		if(!_.isUndefined(this.stats[statType.ordinal]) && !_.isNull(this.stats[statType.ordinal])) {
			return this.stats[statType.ordinal];
		}

		return null;
	}

	/**
	 * Create a Stat and inserts into collection.
	 * @param  {StatType}
	 * @param  {Number}
	 */
	createStat(statType, baseValue) {
		const stat = new Stat(statType, baseValue);
		this.stats[statType.ordinal] = stat;
	}

	addStatModifier(modifier) {
		const statType = StatType.enumValueOf(modifier.stat);
		const stat = this.getStat(statType);

		modifier = new StatModifiers.AddToMaxStatModifier(modifier.value);

		stat.addModifier(modifier);
	}
}

export default StatCollection;
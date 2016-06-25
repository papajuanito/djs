import Stat from 'objects/Stats/Stat';

class StatCollection {
	constructor() {
		this.stats = [4];
		this.configureStats();
	}

	//Retrieve Stat by StatType enum
	getStat(statType) {

		if(!_.isUndefined(this.stats[statType.ordinal]) && !_.isNull(this.stats[statType.ordinal])) {
			return this.stats[statType.ordinal];
		}

		return null;
	}

	//Creates a new Stat and inserts into the collection using StatType enum
	createStat(statType, baseValue) {
		let stat = new Stat(statType, baseValue);
		this.stats[statType.ordinal] = stat;
	}
}

export default StatCollection;
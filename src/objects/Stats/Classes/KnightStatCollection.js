import StatCollection from 'objects/Stats/StatCollection';
import StatType from 'objects/Stats/StatType';

class KnightStatCollection extends StatCollection {
	constructor() {
		super();
	}

	configureStats() {
		this.createStat(StatType.STAMINA, 3);
		this.createStat(StatType.STRENGTH, 8);
		this.createStat(StatType.INTELLIGENCE, 2);
		this.createStat(StatType.FAITH, 2);
		this.createStat(StatType.DEXTERITY, 4);
	}
}

export default KnightStatCollection;
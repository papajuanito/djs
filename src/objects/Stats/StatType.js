import {Enum} from 'enumify';

class StatType extends Enum {};
StatType.initEnum(['STAMINA', 'STRENGTH', 'FAITH', 'INTELLIGENCE', 'DEXTERITY']);

export default StatType;
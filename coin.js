import FieldItem from './fieldItem';
import GM from './GM';
/**
 * Coin item appears as background object on the field
 * @extends FieldItem
 * @class Coin
 * */

class Coin extends FieldItem {
	constructor(param) {
		super(param);

	}
	/**
	 * collided player with coin
	 * @override
	 * @fires 'game:coins:collect' - player pick up the coin
	 */
	collided(){
		GM.trigger('game:coins:collect');
		this.hidden=true;
	}
	
}


export default Coin;
import FieldItem from './fieldItem';
import GM from './GM';
/**
 * Live item appears as background object on the field
 * @extends FieldItem
 * @class Live
 * */
class Live extends FieldItem {
	constructor(param) {
		super(param);

	}
	/**
	 * collided player with live
	 * @override
	 * @fires 'game:live:collect' - player pick up live
	 */
	collided(){
		GM.trigger('player:live:collect');
		this.hidden=true;
	}

}


export default Live;

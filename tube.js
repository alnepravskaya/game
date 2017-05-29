import FieldItem from './fieldItem';
import resources from './resources';

import GM from './GM';
/**
 * Layer with tube items
 * @class TubeLayer
 * @extends Layer
 * */
class Tube extends FieldItem {
	constructor(param) {
		super(param);
		this.type = param.type;
		//this.heigth=param.heigth;
		this.countLayer = param.countLayer;
		this.imgHead = this.type == 0 ? 'tubeHead' : 'tubeHeadDown';
		this.imgTube = this.type == 0 ? 'tube' : 'tubeDown';

	}
	/**
	 * draw  element tube
	 * @param {object} ctx - context with we use to draw.
	 */
	draw(ctx) {
		if (this.isVisible(ctx.width)) {
			let tube = resources[this.imgTube];
			let head = resources[this.imgHead];
			let dyHead = this.type == 1 ? ctx.height-this.height : this.height- head.height;
			ctx.drawImage(head.image, 0, 0, head.width, head.height, this.x, dyHead, head.width, head.height);
			for (let j = 0; j < this.countLayer; j++) {
				let dy = this.type == 1 ? ctx.height - (j+1) * tube.height : j * tube.height;
				ctx.drawImage(tube.image, 0, 0, tube.width, tube.height, this.x, dy, tube.width, tube.height);
			}
		}
	}
	/**
	 * Fires when player with tube collided
	 * @override
	 * @fires 'player:die' - player loses life.
	 */
	collided(){
		GM.trigger('player:die');
		
	}
}

export default Tube;
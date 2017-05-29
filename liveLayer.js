import Layer from './layer';
import Live from './live';
import game from './game';
import resources from './resources';
/**
 * Layer with live items
 * @class LiveLayer
 * @extends Layer
 * */


class LiveLayer extends Layer {
	constructor(config,fieldMap) {
		super();
		this.config = {
			speed: 2
		};
		for (var i = 0; i < fieldMap.length; i++) {
			if (fieldMap[i].live) {
				let live = new Live({
					x:  Math.round((config.slideLength * i-resources.live.width)/2+config.slideLength * i/2),
					y: (game.ctx.height * 0.33 - resources.live.height) / 2 + game.ctx.height * 0.33,
					speedX: this.config.speed,
					imgName: 'live',
					collisable: true
				});
				this.items.push(live);
			}
		}
	}
}

export default LiveLayer;

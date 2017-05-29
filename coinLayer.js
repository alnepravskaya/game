import Layer from './layer';
import Coin from './coin';
import resources from './resources/flappy/resources';



/**
 * Layer with coin items
 * @class CoinLayer
 * @extends Layer
 * */
class CoinLayer extends Layer {
	constructor(config, fieldMap) {
		super();
		this.config = {
			speed: 2
		};
		
		let y;
		for (var i = 0; i < fieldMap.length; i++) {
			if (fieldMap[i].coin && fieldMap[i].coin.bottom) {
				y = Math.round((config.height * 0.33 - resources.coin.height) / 2 + config.height * 0.66);
				let coin = new Coin({
					x:  Math.round((config.slideLength * i-resources.coin.width)/2+config.slideLength * i/2),
					y: y,
					width: resources.coin.width,
					height: resources.coin.height,
					speedX: this.config.speed,
					imgName: 'coin',
					collisable: true
				});
				this.items.push(coin);
			}
			if (fieldMap[i].coin && fieldMap[i].coin.middle) {
				y = Math.round((config.height * 0.33 - resources.coin.height) / 2 + config.height * 0.33);
				let coin = new Coin({
					x: Math.round((config.slideLength * i-resources.coin.width)/2+config.slideLength * i/2),
					y: y,
					width: resources.coin.width,
					height: resources.coin.height,
					speedX: this.config.speed,
					imgName: 'coin',
					collisable: true
				});
				this.items.push(coin);
			}
			if (fieldMap[i].coin && fieldMap[i].coin.top) {
				y = Math.round((config.height * 0.33 - resources.coin.height) / 2);
				let coin = new Coin({
					x:  Math.round((config.slideLength * i-resources.coin.width)/2+config.slideLength * i/2),
					y: y,
					width: resources.coin.width,
					height: resources.coin.height,
					speedX: this.config.speed,
					imgName: 'coin',
					collisable: true
				});
				this.items.push(coin);
			}
		}
	}
}

export default CoinLayer;
import CloudLayer from './cloudLayer';
import TubeLayer from './tubeLayer';
import CoinLayer from './coinLayer';
import LiveLayer from './liveLayer';
import mapPreset from './mapPreset';

class Field {
	constructor(config) {
		this.fieldMap = [];
		this.generateFieldMap(config.mapLength);
		this.createFieldsLayers(config);
	}

	createFieldsLayers(config) {
		this.cloudLayer = new CloudLayer();
		this.tubeLayer = new TubeLayer(config, this.fieldMap);
		this.coinLayer = new CoinLayer(config, this.fieldMap);
		this.liveLayer = new LiveLayer(config, this.fieldMap);
	}

	/**
	 * create map  of the game
	 */
	generateFieldMap(mapLength) {
		this.fieldMap = [mapPreset[6], mapPreset[6]];
		let sum = 0;
		for (let j = 0; j < mapPreset.length; j++) {
			sum += mapPreset[j].probability;
		}
		for (let i = 0; i < mapLength; i++) {
			let cnt = 0;
			let random = Math.random();
			for (let k = 0; k < mapPreset.length; k++) {
				cnt += mapPreset[k].probability;
				if (random * sum < cnt) {
					this.fieldMap.push(mapPreset[k]);
				}
			}
		}
	}

	/**
	 * starts with each new tick of the game
	 */
	checkCollision(config, player) {
		this.tubeLayer.checkCollision(player.x, player.y, player.width, player.height, config);
		this.coinLayer.checkCollision(player.x, player.y, player.width, player.height, config);
		this.liveLayer.checkCollision(player.x, player.y, player.width, player.height, config);
	}

	move(config, tickCnt) {
		this.cloudLayer.move();
		this.tubeLayer.move();
		this.liveLayer.move(config, tickCnt);
		this.coinLayer.move(config, tickCnt);
	}

	/**
	 * draw  elements fields
	 */
	draw(ctx) {
		this.cloudLayer.draw(ctx);
		this.tubeLayer.draw(ctx);
		this.coinLayer.draw(ctx);
		this.liveLayer.draw(ctx);
	}
}

export default Field;

import Layer from './layer';
import Tube from './tube';

import resources from './resources';

/**
 * Layer with tube items
 * @class TubeLayer
 * @extends Layer
 * @param {object} config - game config object.
 * */
class TubeLayer extends Layer {
	constructor(config, fieldMap) {
		super();
		this.config = {
			speed: 2,
			countLayerMax: Math.round((Math.random()*config.height * 0.25) / resources.tube.height),
			countLayerMaxSingle: Math.round(((Math.random()*config.height * 0.3)+config.height * 0.4) / resources.tube.height)
		};
		for (var i = 0; i < fieldMap.length; i++) {
			if (fieldMap[i].tube) {
				let countLayer = fieldMap[i].tube.top && fieldMap[i].tube.bottom ?
					Math.round(Math.random() * this.config.countLayerMax) :
					Math.round(Math.random() * this.config.countLayerMaxSingle);
				let heightTube = countLayer * resources.tube.height + resources.tubeHead.height;
				if (fieldMap[i].tube.top) {
					let tube = new Tube({
						x: Math.round((config.slideLength * i-resources.tube.width)/2+config.slideLength * i/2),
						y:  0 ,
						type: 0 ,
						countLayer: countLayer,
						height: heightTube,
						width: resources.tube.width,
						speedX: this.config.speed,
						collisable: true,
						collisionAccuracyX: 10
					});
					this.items.push(tube);
				}
				if(fieldMap[i].tube.bottom){
					let tube = new Tube({
						x:  Math.round((config.slideLength * i-resources.tube.width)/2+config.slideLength * i/2),
						y: config.height - heightTube,
						type: 1,
						countLayer: countLayer,
						height: heightTube,
						width: resources.tube.width,
						speedX: this.config.speed,
						collisable: true,
						collisionAccuracyX: 10
					});
					this.items.push(tube);
					
				}
			}
		}
	}

}

export default TubeLayer;
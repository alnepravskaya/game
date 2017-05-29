import Layer from './layer';
import Cloud from './cloud';
//import resources from "./resources/mario/resources";
import resources from './resources/flappy/resources';
/**
 * Layer with cloud items
 * @class CloudLayer
 * @extends Layer
 * */
class CloudLayer extends Layer {
	constructor() {
		super();
		this.config = {
			cloudsTypes: ['cloudBig', 'cloudMiddle', 'cloudSmall'],
			maxDis: 400,
			minDis: 150,
			maxY: 150,
			countCloud: 50,
			speed: 1
		};
		let lastCloud = 0;
		for (let i = 0; i < this.config.countCloud; i++) {
			lastCloud += Math.floor(Math.random() * (this.config.maxDis - this.config.minDis)) + this.config.minDis;
			let type = this.config.cloudsTypes[Math.round(Math.random() * (this.config.cloudsTypes.length - 1))];
			let cloud = new Cloud({
				x: lastCloud,
				y: Math.floor(Math.random() * this.config.maxY),
				speedX: this.config.speed,
				imgName: type
			});
			this.items.push(cloud);
			lastCloud += resources[type].width;
		}
	}
}

export default CloudLayer;
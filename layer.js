/**
 * this class is parent for any layer appears on the field
 * @class Layer
 * */
class Layer {
	constructor() {
		this.items = [];
	}

	/**
	 * draw all elements fields
	 * @param {object} ctx - context with we use to draw.
	 */
	draw(ctx) {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].draw(ctx);
		}
	}

	/**
	 * move all items elements fields
	 * @param {object} config - game config object.
	 * @param {number} tickCnt - number of tick passed.
	 */

	move(config, tickCnt) {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].move(config, tickCnt);
		}
	}

	/**
	 * check collision any element of layer with provided  coordinates
	 * @param {number} x - position on axis X.
	 * @param {number} y - position on axis Y.
	 * @param {number} w - width of element.
	 * @param {number} h - height of element.
	 * @param {object} config - game config object.
	 * @return {boolean} true if collided.
	 */

	checkCollision(x, y, w, h, config) {
		for (let i = 0; i < this.items.length; i++) {
			this.items[i].checkCollision(x, y, w, h, config);
		}
	}
}

export default Layer;
import resources from './resources';

/**
 * this class is parent for any element appears on the field
 * @class FieldItem
 *  @param {object} param - contain initial configs.
 *  @param {number} [param.x=0] - position on axis X.
 *  @param {number} [param.y=0] - position on axis Y.
 *  @param {number} [param.speedX=0] - speed on axis X.
 *  @param {number} [param.speedY=0] - speed on axis Y.
 *  @param {string} param.imgName - image resources alias.
 *  @param {number} [param.width=width from resources] - width of element.
 *  @param {number} [param.height=height from resources] - height of element.
 *  @param {boolean} [param.collisable=false] - can this element collided with another .
 *  @param {number} [param.frame=0] - initial sprite frame .
 *  @param {boolean} [param.hidden=false] - hide the element.
 *  @param {number} [param.collisionAccuracyX=0] - accuracy on axis X on collision check.
 *  @param {number} [param.collisionAccuracyY=0] - accuracy on axis Y on collision check.
 *
 * */
class FieldItem {
	constructor(param) {
		this.x = param.x || 0;
		this.y = param.y || 0;
		this.speedX = param.speedX || 0;
		this.speedY = param.speedY || 0;
		this.imgName = param.imgName;
		this.width = param.width || resources[param.imgName].width;
		this.height = param.height || resources[param.imgName].height;
		this.collisable = param.collisable || false;
		this.frame = param.frame || 0;
		this.hidden = param.hidden || false;
		this.collisionAccuracyX = param.collisionAccuracyX || 0;
		this.collisionAccuracyY = param.collisionAccuracyY || 0;
		//this.shapeRectangle = param.shapeRectangle || [{x: this.x, y: this.y}, {x: this.x + this.width, y: this.y}, {x: this.x + this.width, y: this.y + this.height}, {x: this.x, y: this.y + this.height}]
	}

	/**
	 * check collision of this element with provided  coordinates
	 * @param {number} x - position on axis X.
	 * @param {number} y - position on axis Y.
	 * @param {number} w - width of element.
	 * @param {number} h - height of element.
	 * @param {object} config - game config object.
	 * @return {boolean} true if collided.
	 */
	checkCollision(x, y, w, h, config) {
		if (this.hidden) {
			return false;
		}
		if (!this.collisable && !this.isVisible(config.width)) {
			return false;
		}
		const shape = this.getShapeRectangle();
		const m = [{x: x, y: y}, {x: x + w, y: y}, {x: x + w, y: y + h}, {x: x, y: y + h}];
		for (let i = 0; i < m.length; i++) {
			if (shape[0].x + this.collisionAccuracyX < m[i].x && shape[1].x - this.collisionAccuracyX > m[i].x && shape[0].y + this.collisionAccuracyY < m[i].y && shape[3].y > m[i].y) {
				this.collided();
				return true;
			}
		}
	}

	/**
	 * Fires when two element collided
	 */
	collided() {

	}

	/**
	 * get shape rectangle, which occupies by  element
	 * @return {array} array with vertex coordinates rectangle. Start in top-left vertex then go  clockwides
	 */
	getShapeRectangle() {
		return [{x: this.x, y: this.y}, {x: this.x + this.width, y: this.y}, {
			x: this.x + this.width,
			y: this.y + this.height
		}, {x: this.x, y: this.y + this.height}];

	}

	/**
	 * draw  element field
	 * @param {object} ctx - context with we use to draw.
	 */
	draw(ctx) {
		if (this.isVisible(ctx.width) && !this.hidden) {
			if (resources[this.imgName].sprite) {
				this.drawSprite(ctx);
			} else {
				ctx.drawImage(resources[this.imgName].image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
			}
		}

	}

	/**
	 * draw sprite's current frame
	 * @param {object} ctx - context with we use to draw.
	 */
	drawSprite(ctx) {
		var m = resources[this.imgName];
		var shiftX = (m.width + m.gridWidth) * this.frame + m.gridWidth;
		ctx.drawImage(m.image, shiftX, m.gridWidth, m.width, m.height, this.x, this.y, m.width, m.height);
	}

	/**
	 * define element visible or not on the screen
	 * @param {number} screenWidth - width of screen.
	 * @return {boolean} is element visible .
	 */
	isVisible(screenWidth) {
		return (this.x + this.width > 0 && this.x < screenWidth );
	}

	/**
	 * move element field
	 * @param {object} config - game config object.
	 * @param {number} tickCnt - number of tick passed.
	 */
	move(config, tickCnt) {
		this.x -= this.speedX;
		this.y -= this.speedY;
		if (this.imgName && resources[this.imgName].sprite) {
			if (tickCnt % Math.round(config.fps / resources[this.imgName].frequency) == 0) {
				this.frame = (this.frame + 1) % resources[this.imgName].countFrame;

			}
		}


	}
}

export  default FieldItem;
import FieldItem from './fieldItem';
import GM from './GM';
import resources from './resources';
/**
 * Player  appears as background object on the field
 * @extends FieldItem
 * @class Player
 * @listens 'player:live:collect'
 * @listens 'game:pause:start'
 * @listens 'game:pause:end'
 * @listens 'player:die'
 * @listens 'keyboard:action'
 * */
class Player extends FieldItem {
	constructor(param) {
		param.imgName = param.imgName || 'player';
		super(param);
		this.w = param.w || 20;
		this.g = param.g || 5;
		this.lives = param.lives || 1;
		this.state = 'running';
		this.unstoppable = 0;
		GM.on('player:live:collect', ()=> {
			this.lives++;
			this.changeName();
		});
		GM.on('game:pause:start', ()=> {
			this.state = 'staying';
		});
		GM.on('game:pause:end', ()=> {
			this.state = 'running';
		});
		GM.on('player:die', ()=> {
			if (this.unstoppable > 0) {
				return;
			}
			this.lives--;
			this.changeName();
			this.unstoppable = 240;
			if (this.lives == 0) {
				this.state = 'died';
				GM.trigger('game:gameover');
			}
		});
		GM.on('keyboard:action', this.axiYUp.bind(this));

	}
	/**
	 * change player's name in depending her count live
	 */
	changeName() {
		if (this.lives < 2) {
			this.imgName = 'player';
		} else if (this.lives == 2) {
			this.imgName = 'playerUp';
		} else {
			this.imgName = 'playerUltimate';
		}
	}
	
	/**
	 * move player on field
	 * @param {object} config - game config object.
	 * @param {number} tickCnt - number of tick passed.
	 */

	move(config, tickCnt) {
		this.y -= (this.w - this.g);
		this.w = (this.y < 0) ? this.g : this.w;
		this.y = (this.y < config.height - resources[this.imgName].height) ? this.y : config.height - resources[this.imgName].height;
		this.y = (this.y > 0) ? this.y : 0;

		this.w = this.w > 0 ? this.w - 1 : this.w;

		if (this.imgName && resources[this.imgName].sprite) {
			if (tickCnt % Math.round(config.fps / resources[this.imgName].frequency) == 0 || this.state == 'died' || this.state == 'staying') {
				if (resources[this.imgName].states) {
					let states = resources[this.imgName].states[this.state] || resources[this.imgName].states['default'];
					let frameNumber = tickCnt % states.length;
					this.frame = states[frameNumber];
				} else {
					this.frame = (this.frame + 1) % resources.player.countFrame;
				}
			}
		}
		this.unstoppable > 0 ? this.unstoppable-- : this.unstoppable;
	}
	/**
	 * move player on axis Y
	 */
	axiYUp() {
		this.w += 20;
	}

	/**
	 * draw  element field
	 * @param {object} ctx - context with we use to draw.
	 */
	draw(ctx) {

		if (this.unstoppable > 0 && this.lives != 0) {
			ctx.globalAlpha = 0.5 + 0.5 * (1 - this.unstoppable / 240);
			super.draw(ctx);
			ctx.globalAlpha = 1;
		}
		else {
			super.draw(ctx);
		}
	}

}


export default Player;
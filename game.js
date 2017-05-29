import GM from './GM';
import Player from './player';
import Field from './field';
import resources from './resources';

const game = {
	ctx: null,
	player: null,
	config: {
		width: 960,
		height: 540,
		mapLength: 100,
		slideLength: 400,
		fps: 60
	},
	tickCnt: 0,
	scoreMax: localStorage.getItem('scoreMax') || 0,
	score: 0,
	pause: true,
	status: 'start',

	/**
	 * initial state of the game
	 * @listens 'game:coins:collect'
	 * @listens 'game:gameover'
	 * @listens 'game:restart'
	 * @listens 'game:gamestart'
	 * @fires 'game:gamestart' - game start
	 * @fires 'keyboard:action' - game start. Player start play
	 * @fires 'game:restart' - restart game
	 */
	init: function () {

		var canvas = document.getElementById('maket');
		this.ctx = canvas.getContext('2d');
		this.ctx.width = this.config.width;
		this.ctx.height = this.config.height;
		canvas.width = this.config.width;
		canvas.height = this.config.height;
		this.ctx.font = 'bold 30px sans-serif';
		let blockBG=document.querySelector('.bg');
		blockBG.style.background=resources.bg.color;
		this.ctx.drawImage(resources.gamestart.image, 0, 0, resources.gamestart.width, resources.gamestart.height, (this.ctx.width - resources.gamestart.width) / 2, (this.ctx.height - resources.gamestart.height) / 2, resources.gamestart.width, resources.gamestart.height);

		GM.on('game:restart', ()=> {
			this.status = 'start';
			this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);

			this.ctx.drawImage(resources.gamestart.image, 0, 0, resources.gamestart.width, resources.gamestart.height, (this.ctx.width - resources.gamestart.width) / 2, (this.ctx.height - resources.gamestart.height) / 2, resources.gamestart.width, resources.gamestart.height);
			this.newGame();
		});
		GM.on('game:gamestart', ()=> {
			this.newGame();
		});

		GM.on('game:coins:collect', ()=> {
			this.score++;
			this.scoreMax = Math.max(this.score, this.scoreMax);
			localStorage.setItem('scoreMax', this.scoreMax);
		});

		GM.on('game:gameover', ()=> {
			this.gameover();
		});

		window.onkeydown = (e)=> {

			if (e.keyCode == 32) {
				e.preventDefault();
				switch (this.status) {
					case 'start':
						GM.trigger('game:gamestart');
						break;
					case 'playing':
						if (!this.pause) {
							GM.trigger('keyboard:action');
						}
						break;
					case  'over':
						GM.trigger('game:restart');
						break;
				}
			}
			if (e.keyCode == 80) {
				e.preventDefault();
				if (!this.pause) {
					GM.trigger('game:pause:start');
					this.tick();
					this.pause = true;
				}
				else {
					this.pause = false;
					GM.trigger('game:pause:end');
				}
			}
		};
		setInterval(this.tick.bind(this), 1000 / this.config.fps);
	},

	/**
	 *  Live of player is zero. Game finish.
	 */
	gameover: function () {
		this.status = 'over';
		this.tick();
		this.pause = true;
		this.ctx.drawImage(resources.gameover.image, 0, 0, resources.gameover.width, resources.gameover.height, (this.ctx.width - resources.gameover.width) / 2, (this.ctx.height - resources.gameover.height) / 2, resources.gameover.width, resources.gameover.height);
	},

	/**
	 *   Game start. Draw item of field and player.
	 */
	newGame: function () {
		this.player = new Player({
			x: 350,
			y: 330
		});
		this.field = new Field(this.config);
		this.pause = false;
		this.status = 'playing';
		this.score = 0;
	},

	/**
	 * starts with each new tick of the game
	 */
	tick: function () {
		if (!this.pause) {
			this.field.move(this.config, this.tickCnt);
			this.player.move(this.config, this.tickCnt);
			this.draw();
			this.field.checkCollision(this.config, this.player);
			this.tickCnt++;
		}
	},

	/**
	 * draw  elements fields
	 */
	draw: function () {

		this.ctx.clearRect(0, 0, this.config.width, this.config.height);

		this.field.draw(this.ctx);
		this.player.draw(this.ctx);
		this.drawScore();
	},

	/**
	 * draw  score: max and currently
	 */
	drawScore: function () {
		this.ctx.fillText(this.score, this.config.width - 100, 50);
		this.ctx.drawImage(resources.coin.image, resources.coin.gridWidth || 0, resources.coin.gridWidth || 0, resources.coin.width, resources.coin.height, this.config.width - 60, 20, 32, 32);
		this.ctx.drawImage(resources.coin.image, resources.coin.gridWidth || 0, resources.coin.gridWidth || 0, resources.coin.width, resources.coin.height, 130, 20, 32, 32);
		this.ctx.fillText('best ' + this.scoreMax, 10, 50);
	}
};
export default game;


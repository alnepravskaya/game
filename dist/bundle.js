/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _RM = __webpack_require__(6);

var _RM2 = _interopRequireDefault(_RM);

var _game = __webpack_require__(4);

var _game2 = _interopRequireDefault(_game);

var _resources = __webpack_require__(20);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GM = {
	init: function init() {
		_RM2.default.init(_resources2.default);
		this.on('resources:loaded', _game2.default.init.bind(_game2.default));
	},
	trigger: function trigger(event) {
		var e = new Event(event);
		document.body.dispatchEvent(e);
	},
	on: function on(event, callback) {
		document.body.addEventListener(event, callback);
	}
};
window.onload = function () {
	GM.init();
};

exports.default = GM;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var res = {
	player: {
		src: "resources/mario/player.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 32,
		frequency: 3,
		states: {
			staying: [0],
			died: [6],
			default: [1, 2, 3]
		}
	},
	playerUp: {
		src: "resources/mario/playerUp.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 64,
		frequency: 3,
		states: {
			staying: [0],
			default: [1, 2, 3]
		}
	},
	playerUltimate: {
		src: "resources/mario/playerUltimate.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 64,
		frequency: 3,
		states: {
			staying: [0],
			default: [1, 2, 3]
		}

	},
	cloudBig: {
		src: "resources/mario/cloud_big.png",
		width: 256,
		height: 96
	},
	cloudMiddle: {
		src: "resources/mario/cloud_middle.png",
		width: 192,
		height: 96
	},
	cloudSmall: {
		src: "resources/mario/cloud_small.png",
		width: 128,
		height: 96
	},
	tubeHead: {
		src: "resources/mario/tube_vertical_head.png",
		width: 128,
		height: 60

	},
	tube: {
		src: "resources/mario/tube_vertical.png",
		width: 128,
		height: 8
	},
	tubeHeadDown: {
		src: "resources/mario/tube_vertical_headDown.png",
		width: 128,
		height: 60

	},
	tubeDown: {
		src: "resources/mario/tube_verticalDown.png",
		width: 128,
		height: 8
	},
	coin: {
		src: "resources/mario/coin.png",
		sprite: true,
		gridWidth: 2,
		width: 40,
		height: 56,
		frequency: 6
	},
	live: {
		src: "resources/mario/live.png",
		width: 32,
		height: 32
	},
	gameover: {
		src: "resources/mario/gameover.png",
		width: 640,
		height: 540
	},
	gamestart: {
		src: "resources/mario/gamestart.png",
		width: 640,
		height: 540
	},
	bg: {
		color: '#6093fe'
	}

};

exports.default = res;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resources = __webpack_require__(20);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var FieldItem = function () {
	function FieldItem(param) {
		_classCallCheck(this, FieldItem);

		this.x = param.x || 0;
		this.y = param.y || 0;
		this.speedX = param.speedX || 0;
		this.speedY = param.speedY || 0;
		this.imgName = param.imgName;
		this.width = param.width || _resources2.default[param.imgName].width;
		this.height = param.height || _resources2.default[param.imgName].height;
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


	_createClass(FieldItem, [{
		key: 'checkCollision',
		value: function checkCollision(x, y, w, h, config) {
			if (this.hidden) {
				return false;
			}
			if (!this.collisable && !this.isVisible(config.width)) {
				return false;
			}
			var shape = this.getShapeRectangle();
			var m = [{ x: x, y: y }, { x: x + w, y: y }, { x: x + w, y: y + h }, { x: x, y: y + h }];
			for (var i = 0; i < m.length; i++) {
				if (shape[0].x + this.collisionAccuracyX < m[i].x && shape[1].x - this.collisionAccuracyX > m[i].x && shape[0].y + this.collisionAccuracyY < m[i].y && shape[3].y > m[i].y) {
					this.collided();
					return true;
				}
			}
		}

		/**
   * Fires when two element collided
   */

	}, {
		key: 'collided',
		value: function collided() {}

		/**
   * get shape rectangle, which occupies by  element
   * @return {array} array with vertex coordinates rectangle. Start in top-left vertex then go  clockwides
   */

	}, {
		key: 'getShapeRectangle',
		value: function getShapeRectangle() {
			return [{ x: this.x, y: this.y }, { x: this.x + this.width, y: this.y }, {
				x: this.x + this.width,
				y: this.y + this.height
			}, { x: this.x, y: this.y + this.height }];
		}

		/**
   * draw  element field
   * @param {object} ctx - context with we use to draw.
   */

	}, {
		key: 'draw',
		value: function draw(ctx) {
			if (this.isVisible(ctx.width) && !this.hidden) {
				if (_resources2.default[this.imgName].sprite) {
					this.drawSprite(ctx);
				} else {
					ctx.drawImage(_resources2.default[this.imgName].image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
				}
			}
		}

		/**
   * draw sprite's current frame
   * @param {object} ctx - context with we use to draw.
   */

	}, {
		key: 'drawSprite',
		value: function drawSprite(ctx) {
			var m = _resources2.default[this.imgName];
			var shiftX = (m.width + m.gridWidth) * this.frame + m.gridWidth;
			ctx.drawImage(m.image, shiftX, m.gridWidth, m.width, m.height, this.x, this.y, m.width, m.height);
		}

		/**
   * define element visible or not on the screen
   * @param {number} screenWidth - width of screen.
   * @return {boolean} is element visible .
   */

	}, {
		key: 'isVisible',
		value: function isVisible(screenWidth) {
			return this.x + this.width > 0 && this.x < screenWidth;
		}

		/**
   * move element field
   * @param {object} config - game config object.
   * @param {number} tickCnt - number of tick passed.
   */

	}, {
		key: 'move',
		value: function move(config, tickCnt) {
			this.x -= this.speedX;
			this.y -= this.speedY;
			if (this.imgName && _resources2.default[this.imgName].sprite) {
				if (tickCnt % Math.round(config.fps / _resources2.default[this.imgName].frequency) == 0) {
					this.frame = (this.frame + 1) % _resources2.default[this.imgName].countFrame;
				}
			}
		}
	}]);

	return FieldItem;
}();

exports.default = FieldItem;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * this class is parent for any layer appears on the field
 * @class Layer
 * */
var Layer = function () {
	function Layer() {
		_classCallCheck(this, Layer);

		this.items = [];
	}

	/**
  * draw all elements fields
  * @param {object} ctx - context with we use to draw.
  */


	_createClass(Layer, [{
		key: "draw",
		value: function draw(ctx) {
			for (var i = 0; i < this.items.length; i++) {
				this.items[i].draw(ctx);
			}
		}

		/**
   * move all items elements fields
   * @param {object} config - game config object.
   * @param {number} tickCnt - number of tick passed.
   */

	}, {
		key: "move",
		value: function move(config, tickCnt) {
			for (var i = 0; i < this.items.length; i++) {
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

	}, {
		key: "checkCollision",
		value: function checkCollision(x, y, w, h, config) {
			for (var i = 0; i < this.items.length; i++) {
				this.items[i].checkCollision(x, y, w, h, config);
			}
		}
	}]);

	return Layer;
}();

exports.default = Layer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GM = __webpack_require__(0);

var _GM2 = _interopRequireDefault(_GM);

var _player = __webpack_require__(13);

var _player2 = _interopRequireDefault(_player);

var _field = __webpack_require__(19);

var _field2 = _interopRequireDefault(_field);

var _resources = __webpack_require__(20);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = {
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
	init: function init() {
		var _this = this;

		var canvas = document.getElementById('maket');
		this.ctx = canvas.getContext('2d');
		this.ctx.width = this.config.width;
		this.ctx.height = this.config.height;
		canvas.width = this.config.width;
		canvas.height = this.config.height;
		this.ctx.font = 'bold 30px sans-serif';
		var blockBG = document.querySelector('.bg');
		blockBG.style.background = _resources2.default.bg.color;
		this.ctx.drawImage(_resources2.default.gamestart.image, 0, 0, _resources2.default.gamestart.width, _resources2.default.gamestart.height, (this.ctx.width - _resources2.default.gamestart.width) / 2, (this.ctx.height - _resources2.default.gamestart.height) / 2, _resources2.default.gamestart.width, _resources2.default.gamestart.height);

		_GM2.default.on('game:restart', function () {
			_this.status = 'start';
			_this.ctx.clearRect(0, 0, _this.ctx.width, _this.ctx.height);

			_this.ctx.drawImage(_resources2.default.gamestart.image, 0, 0, _resources2.default.gamestart.width, _resources2.default.gamestart.height, (_this.ctx.width - _resources2.default.gamestart.width) / 2, (_this.ctx.height - _resources2.default.gamestart.height) / 2, _resources2.default.gamestart.width, _resources2.default.gamestart.height);
			_this.newGame();
		});
		_GM2.default.on('game:gamestart', function () {
			_this.newGame();
		});

		_GM2.default.on('game:coins:collect', function () {
			_this.score++;
			_this.scoreMax = Math.max(_this.score, _this.scoreMax);
			localStorage.setItem('scoreMax', _this.scoreMax);
		});

		_GM2.default.on('game:gameover', function () {
			_this.gameover();
		});

		window.onkeydown = function (e) {

			if (e.keyCode == 32) {
				e.preventDefault();
				switch (_this.status) {
					case 'start':
						_GM2.default.trigger('game:gamestart');
						break;
					case 'playing':
						if (!_this.pause) {
							_GM2.default.trigger('keyboard:action');
						}
						break;
					case 'over':
						_GM2.default.trigger('game:restart');
						break;
				}
			}
			if (e.keyCode == 80) {
				e.preventDefault();
				if (!_this.pause) {
					_GM2.default.trigger('game:pause:start');
					_this.tick();
					_this.pause = true;
				} else {
					_this.pause = false;
					_GM2.default.trigger('game:pause:end');
				}
			}
		};
		setInterval(this.tick.bind(this), 1000 / this.config.fps);
	},

	/**
  *  Live of player is zero. Game finish.
  */
	gameover: function gameover() {
		this.status = 'over';
		this.tick();
		this.pause = true;
		this.ctx.drawImage(_resources2.default.gameover.image, 0, 0, _resources2.default.gameover.width, _resources2.default.gameover.height, (this.ctx.width - _resources2.default.gameover.width) / 2, (this.ctx.height - _resources2.default.gameover.height) / 2, _resources2.default.gameover.width, _resources2.default.gameover.height);
	},

	/**
  *   Game start. Draw item of field and player.
  */
	newGame: function newGame() {
		this.player = new _player2.default({
			x: 350,
			y: 330
		});
		this.field = new _field2.default(this.config);
		this.pause = false;
		this.status = 'playing';
		this.score = 0;
	},

	/**
  * starts with each new tick of the game
  */
	tick: function tick() {
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
	draw: function draw() {

		this.ctx.clearRect(0, 0, this.config.width, this.config.height);

		this.field.draw(this.ctx);
		this.player.draw(this.ctx);
		this.drawScore();
	},

	/**
  * draw  score: max and currently
  */
	drawScore: function drawScore() {
		this.ctx.fillText(this.score, this.config.width - 100, 50);
		this.ctx.drawImage(_resources2.default.coin.image, _resources2.default.coin.gridWidth || 0, _resources2.default.coin.gridWidth || 0, _resources2.default.coin.width, _resources2.default.coin.height, this.config.width - 60, 20, 32, 32);
		this.ctx.drawImage(_resources2.default.coin.image, _resources2.default.coin.gridWidth || 0, _resources2.default.coin.gridWidth || 0, _resources2.default.coin.width, _resources2.default.coin.height, 130, 20, 32, 32);
		this.ctx.fillText('best ' + this.scoreMax, 10, 50);
	}
};
exports.default = game;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var res = {
	player: {
		src: "resources/flappy/player.png",
		sprite: true,
		gridWidth: 2,
		width: 34,
		height: 24,
		frequency: 3
	},
	playerUp: {
		src: "resources/flappy/playerUp.png",
		sprite: true,
		gridWidth: 2,
		width: 34,
		height: 24,
		frequency: 3
	},
	playerUltimate: {
		src: "resources/flappy/playerUltimate.png",
		sprite: true,
		gridWidth: 2,
		width: 34,
		height: 24,
		frequency: 3

	},
	cloudBig: {
		src: "resources/flappy/cloud_big.png",
		width: 256,
		height: 96
	},
	cloudMiddle: {
		src: "resources/flappy/cloud_middle.png",
		width: 192,
		height: 96
	},
	cloudSmall: {
		src: "resources/flappy/cloud_small.png",
		width: 128,
		height: 96
	},
	tubeHead: {
		src: "resources/flappy/tube_vertical_head.png",
		width: 78,
		height: 39

	},
	tube: {
		src: "resources/flappy/tube_vertical.png",
		width: 78,
		height: 3
	},
	tubeHeadDown: {
		src: "resources/flappy/tube_vertical_head_down.png",
		width: 78,
		height: 39

	},
	tubeDown: {
		src: "resources/flappy/tube_vertical_down.png",
		width: 78,
		height: 3
	},
	coin: {
		src: "resources/flappy/coins.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 32,
		frequency: 5
	},
	live: {
		src: "resources/flappy/live.png",
		width: 26,
		height: 26
	},
	gameover: {
		src: "resources/flappy/gameover.png",
		width: 640,
		height: 540
	},
	gamestart: {
		src: "resources/flappy/gamestart.png",
		width: 640,
		height: 540
	},
	bg: {
		color: '#4ec0ca'
	}

};

exports.default = res;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GM = __webpack_require__(0);

var _GM2 = _interopRequireDefault(_GM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RM = {
	init: function init(resources) {
		var countFor = 0;
		var countload = 0;
		for (var key in resources) {
			if (resources[key].src) {
				var img = document.createElement('img');
				var way = resources[key].src;
				img.setAttribute('src', way);
				countFor++;
				img.addEventListener('load', function () {
					resources[this.key].image = this.img;
					if (resources[this.key].sprite) {
						resources[this.key].countFrame = (resources[this.key].image.width - resources[this.key].gridWidth) / (resources[this.key].width + resources[this.key].gridWidth);
					}
					countload++;
					if (countFor == countload) {
						_GM2.default.trigger('resources:loaded');
					}
				}.bind({ key: key, img: img }));
				document.getElementById('preloader').appendChild(img);
			}
		}
	}
}; /* exported RM */

exports.default = RM;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fieldItem = __webpack_require__(2);

var _fieldItem2 = _interopRequireDefault(_fieldItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Cloud item appears as background object on the field
 * @extends FieldItem
 * @class Cloud
 * */
var Cloud = function (_FieldItem) {
  _inherits(Cloud, _FieldItem);

  function Cloud(param) {
    _classCallCheck(this, Cloud);

    return _possibleConstructorReturn(this, (Cloud.__proto__ || Object.getPrototypeOf(Cloud)).call(this, param));
  }

  return Cloud;
}(_fieldItem2.default);

exports.default = Cloud;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _layer = __webpack_require__(3);

var _layer2 = _interopRequireDefault(_layer);

var _cloud = __webpack_require__(7);

var _cloud2 = _interopRequireDefault(_cloud);

var _resources = __webpack_require__(5);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import resources from "./resources/mario/resources";


/**
 * Layer with cloud items
 * @class CloudLayer
 * @extends Layer
 * */
var CloudLayer = function (_Layer) {
	_inherits(CloudLayer, _Layer);

	function CloudLayer() {
		_classCallCheck(this, CloudLayer);

		var _this = _possibleConstructorReturn(this, (CloudLayer.__proto__ || Object.getPrototypeOf(CloudLayer)).call(this));

		_this.config = {
			cloudsTypes: ['cloudBig', 'cloudMiddle', 'cloudSmall'],
			maxDis: 400,
			minDis: 150,
			maxY: 150,
			countCloud: 50,
			speed: 1
		};
		var lastCloud = 0;
		for (var i = 0; i < _this.config.countCloud; i++) {
			lastCloud += Math.floor(Math.random() * (_this.config.maxDis - _this.config.minDis)) + _this.config.minDis;
			var type = _this.config.cloudsTypes[Math.round(Math.random() * (_this.config.cloudsTypes.length - 1))];
			var cloud = new _cloud2.default({
				x: lastCloud,
				y: Math.floor(Math.random() * _this.config.maxY),
				speedX: _this.config.speed,
				imgName: type
			});
			_this.items.push(cloud);
			lastCloud += _resources2.default[type].width;
		}
		return _this;
	}

	return CloudLayer;
}(_layer2.default);

exports.default = CloudLayer;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fieldItem = __webpack_require__(2);

var _fieldItem2 = _interopRequireDefault(_fieldItem);

var _GM = __webpack_require__(0);

var _GM2 = _interopRequireDefault(_GM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Coin item appears as background object on the field
 * @extends FieldItem
 * @class Coin
 * */

var Coin = function (_FieldItem) {
	_inherits(Coin, _FieldItem);

	function Coin(param) {
		_classCallCheck(this, Coin);

		return _possibleConstructorReturn(this, (Coin.__proto__ || Object.getPrototypeOf(Coin)).call(this, param));
	}
	/**
  * collided player with coin
  * @override
  * @fires 'game:coins:collect' - player pick up the coin
  */


	_createClass(Coin, [{
		key: 'collided',
		value: function collided() {
			_GM2.default.trigger('game:coins:collect');
			this.hidden = true;
		}
	}]);

	return Coin;
}(_fieldItem2.default);

exports.default = Coin;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _layer = __webpack_require__(3);

var _layer2 = _interopRequireDefault(_layer);

var _coin3 = __webpack_require__(9);

var _coin4 = _interopRequireDefault(_coin3);

var _resources = __webpack_require__(5);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Layer with coin items
 * @class CoinLayer
 * @extends Layer
 * */
var CoinLayer = function (_Layer) {
	_inherits(CoinLayer, _Layer);

	function CoinLayer(config, fieldMap) {
		_classCallCheck(this, CoinLayer);

		var _this = _possibleConstructorReturn(this, (CoinLayer.__proto__ || Object.getPrototypeOf(CoinLayer)).call(this));

		_this.config = {
			speed: 2
		};

		var y = void 0;
		for (var i = 0; i < fieldMap.length; i++) {
			if (fieldMap[i].coin && fieldMap[i].coin.bottom) {
				y = Math.round((config.height * 0.33 - _resources2.default.coin.height) / 2 + config.height * 0.66);
				var coin = new _coin4.default({
					x: Math.round((config.slideLength * i - _resources2.default.coin.width) / 2 + config.slideLength * i / 2),
					y: y,
					width: _resources2.default.coin.width,
					height: _resources2.default.coin.height,
					speedX: _this.config.speed,
					imgName: 'coin',
					collisable: true
				});
				_this.items.push(coin);
			}
			if (fieldMap[i].coin && fieldMap[i].coin.middle) {
				y = Math.round((config.height * 0.33 - _resources2.default.coin.height) / 2 + config.height * 0.33);
				var _coin = new _coin4.default({
					x: Math.round((config.slideLength * i - _resources2.default.coin.width) / 2 + config.slideLength * i / 2),
					y: y,
					width: _resources2.default.coin.width,
					height: _resources2.default.coin.height,
					speedX: _this.config.speed,
					imgName: 'coin',
					collisable: true
				});
				_this.items.push(_coin);
			}
			if (fieldMap[i].coin && fieldMap[i].coin.top) {
				y = Math.round((config.height * 0.33 - _resources2.default.coin.height) / 2);
				var _coin2 = new _coin4.default({
					x: Math.round((config.slideLength * i - _resources2.default.coin.width) / 2 + config.slideLength * i / 2),
					y: y,
					width: _resources2.default.coin.width,
					height: _resources2.default.coin.height,
					speedX: _this.config.speed,
					imgName: 'coin',
					collisable: true
				});
				_this.items.push(_coin2);
			}
		}
		return _this;
	}

	return CoinLayer;
}(_layer2.default);

exports.default = CoinLayer;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _fieldItem = __webpack_require__(2);

var _fieldItem2 = _interopRequireDefault(_fieldItem);

var _GM = __webpack_require__(0);

var _GM2 = _interopRequireDefault(_GM);

var _resources = __webpack_require__(20);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Player = function (_FieldItem) {
	_inherits(Player, _FieldItem);

	function Player(param) {
		_classCallCheck(this, Player);

		param.imgName = param.imgName || 'player';

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, param));

		_this.w = param.w || 20;
		_this.g = param.g || 5;
		_this.lives = param.lives || 1;
		_this.state = 'running';
		_this.unstoppable = 0;
		_GM2.default.on('player:live:collect', function () {
			_this.lives++;
			_this.changeName();
		});
		_GM2.default.on('game:pause:start', function () {
			_this.state = 'staying';
		});
		_GM2.default.on('game:pause:end', function () {
			_this.state = 'running';
		});
		_GM2.default.on('player:die', function () {
			if (_this.unstoppable > 0) {
				return;
			}
			_this.lives--;
			_this.changeName();
			_this.unstoppable = 240;
			if (_this.lives == 0) {
				_this.state = 'died';
				_GM2.default.trigger('game:gameover');
			}
		});
		_GM2.default.on('keyboard:action', _this.axiYUp.bind(_this));

		return _this;
	}
	/**
  * change player's name in depending her count live
  */


	_createClass(Player, [{
		key: 'changeName',
		value: function changeName() {
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

	}, {
		key: 'move',
		value: function move(config, tickCnt) {
			this.y -= this.w - this.g;
			this.w = this.y < 0 ? this.g : this.w;
			this.y = this.y < config.height - _resources2.default[this.imgName].height ? this.y : config.height - _resources2.default[this.imgName].height;
			this.y = this.y > 0 ? this.y : 0;

			this.w = this.w > 0 ? this.w - 1 : this.w;

			if (this.imgName && _resources2.default[this.imgName].sprite) {
				if (tickCnt % Math.round(config.fps / _resources2.default[this.imgName].frequency) == 0 || this.state == 'died' || this.state == 'staying') {
					if (_resources2.default[this.imgName].states) {
						var states = _resources2.default[this.imgName].states[this.state] || _resources2.default[this.imgName].states['default'];
						var frameNumber = tickCnt % states.length;
						this.frame = states[frameNumber];
					} else {
						this.frame = (this.frame + 1) % _resources2.default.player.countFrame;
					}
				}
			}
			this.unstoppable > 0 ? this.unstoppable-- : this.unstoppable;
		}
		/**
   * move player on axis Y
   */

	}, {
		key: 'axiYUp',
		value: function axiYUp() {
			this.w += 20;
		}

		/**
   * draw  element field
   * @param {object} ctx - context with we use to draw.
   */

	}, {
		key: 'draw',
		value: function draw(ctx) {

			if (this.unstoppable > 0 && this.lives != 0) {
				ctx.globalAlpha = 0.5 + 0.5 * (1 - this.unstoppable / 240);
				_get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'draw', this).call(this, ctx);
				ctx.globalAlpha = 1;
			} else {
				_get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'draw', this).call(this, ctx);
			}
		}
	}]);

	return Player;
}(_fieldItem2.default);

exports.default = Player;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fieldItem = __webpack_require__(2);

var _fieldItem2 = _interopRequireDefault(_fieldItem);

var _resources = __webpack_require__(20);

var _resources2 = _interopRequireDefault(_resources);

var _GM = __webpack_require__(0);

var _GM2 = _interopRequireDefault(_GM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Layer with tube items
 * @class TubeLayer
 * @extends Layer
 * */
var Tube = function (_FieldItem) {
	_inherits(Tube, _FieldItem);

	function Tube(param) {
		_classCallCheck(this, Tube);

		var _this = _possibleConstructorReturn(this, (Tube.__proto__ || Object.getPrototypeOf(Tube)).call(this, param));

		_this.type = param.type;
		//this.heigth=param.heigth;
		_this.countLayer = param.countLayer;
		_this.imgHead = _this.type == 0 ? 'tubeHead' : 'tubeHeadDown';
		_this.imgTube = _this.type == 0 ? 'tube' : 'tubeDown';

		return _this;
	}
	/**
  * draw  element tube
  * @param {object} ctx - context with we use to draw.
  */


	_createClass(Tube, [{
		key: 'draw',
		value: function draw(ctx) {
			if (this.isVisible(ctx.width)) {
				var tube = _resources2.default[this.imgTube];
				var head = _resources2.default[this.imgHead];
				var dyHead = this.type == 1 ? ctx.height - this.height : this.height - head.height;
				ctx.drawImage(head.image, 0, 0, head.width, head.height, this.x, dyHead, head.width, head.height);
				for (var j = 0; j < this.countLayer; j++) {
					var dy = this.type == 1 ? ctx.height - (j + 1) * tube.height : j * tube.height;
					ctx.drawImage(tube.image, 0, 0, tube.width, tube.height, this.x, dy, tube.width, tube.height);
				}
			}
		}
		/**
   * Fires when player with tube collided
   * @override
   * @fires 'player:die' - player loses life.
   */

	}, {
		key: 'collided',
		value: function collided() {
			_GM2.default.trigger('player:die');
		}
	}]);

	return Tube;
}(_fieldItem2.default);

exports.default = Tube;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _layer = __webpack_require__(3);

var _layer2 = _interopRequireDefault(_layer);

var _tube2 = __webpack_require__(14);

var _tube3 = _interopRequireDefault(_tube2);

var _resources = __webpack_require__(20);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Layer with tube items
 * @class TubeLayer
 * @extends Layer
 * @param {object} config - game config object.
 * */
var TubeLayer = function (_Layer) {
	_inherits(TubeLayer, _Layer);

	function TubeLayer(config, fieldMap) {
		_classCallCheck(this, TubeLayer);

		var _this = _possibleConstructorReturn(this, (TubeLayer.__proto__ || Object.getPrototypeOf(TubeLayer)).call(this));

		_this.config = {
			speed: 2,
			countLayerMax: Math.round(Math.random() * config.height * 0.25 / _resources2.default.tube.height),
			countLayerMaxSingle: Math.round((Math.random() * config.height * 0.3 + config.height * 0.4) / _resources2.default.tube.height)
		};
		for (var i = 0; i < fieldMap.length; i++) {
			if (fieldMap[i].tube) {
				var countLayer = fieldMap[i].tube.top && fieldMap[i].tube.bottom ? Math.round(Math.random() * _this.config.countLayerMax) : Math.round(Math.random() * _this.config.countLayerMaxSingle);
				var heightTube = countLayer * _resources2.default.tube.height + _resources2.default.tubeHead.height;
				if (fieldMap[i].tube.top) {
					var tube = new _tube3.default({
						x: Math.round((config.slideLength * i - _resources2.default.tube.width) / 2 + config.slideLength * i / 2),
						y: 0,
						type: 0,
						countLayer: countLayer,
						height: heightTube,
						width: _resources2.default.tube.width,
						speedX: _this.config.speed,
						collisable: true,
						collisionAccuracyX: 10
					});
					_this.items.push(tube);
				}
				if (fieldMap[i].tube.bottom) {
					var _tube = new _tube3.default({
						x: Math.round((config.slideLength * i - _resources2.default.tube.width) / 2 + config.slideLength * i / 2),
						y: config.height - heightTube,
						type: 1,
						countLayer: countLayer,
						height: heightTube,
						width: _resources2.default.tube.width,
						speedX: _this.config.speed,
						collisable: true,
						collisionAccuracyX: 10
					});
					_this.items.push(_tube);
				}
			}
		}
		return _this;
	}

	return TubeLayer;
}(_layer2.default);

exports.default = TubeLayer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var mapPreset = [{
	tube: {
		bottom: true
	},
	probability: 5
}, {
	live: {
		middle: true
	},
	probability: 10
}, {
	tube: {
		top: true
	},
	probability: 4
}, {
	tube: {
		top: true,
		bottom: true
	},
	coin: {
		middle: true
	},
	probability: 3
}, {
	tube: {
		top: true
	},
	coin: {
		bottom: true
	},
	probability: 2

}, {
	tube: {
		bottom: true
	},
	coin: {
		top: true
	},
	probability: 4
}, {
	coin: {
		middle: true
	},
	probability: 3
}, {
	coin: {
		top: true,
		middle: true,
		bottom: true
	},
	probability: 2
}, {
	coin: {
		top: true,
		bottom: true
	},
	probability: 5
}, {
	tube: {
		top: true,
		bottom: true
	},
	probability: 2
}];

exports.default = mapPreset;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _layer = __webpack_require__(3);

var _layer2 = _interopRequireDefault(_layer);

var _live = __webpack_require__(18);

var _live2 = _interopRequireDefault(_live);

var _game = __webpack_require__(4);

var _game2 = _interopRequireDefault(_game);

var _resources = __webpack_require__(20);

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Layer with live items
 * @class LiveLayer
 * @extends Layer
 * */

var LiveLayer = function (_Layer) {
	_inherits(LiveLayer, _Layer);

	function LiveLayer(config, fieldMap) {
		_classCallCheck(this, LiveLayer);

		var _this = _possibleConstructorReturn(this, (LiveLayer.__proto__ || Object.getPrototypeOf(LiveLayer)).call(this));

		_this.config = {
			speed: 2
		};
		for (var i = 0; i < fieldMap.length; i++) {
			if (fieldMap[i].live) {
				var live = new _live2.default({
					x: Math.round((config.slideLength * i - _resources2.default.live.width) / 2 + config.slideLength * i / 2),
					y: (_game2.default.ctx.height * 0.33 - _resources2.default.live.height) / 2 + _game2.default.ctx.height * 0.33,
					speedX: _this.config.speed,
					imgName: 'live',
					collisable: true
				});
				_this.items.push(live);
			}
		}
		return _this;
	}

	return LiveLayer;
}(_layer2.default);

exports.default = LiveLayer;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fieldItem = __webpack_require__(2);

var _fieldItem2 = _interopRequireDefault(_fieldItem);

var _GM = __webpack_require__(0);

var _GM2 = _interopRequireDefault(_GM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Live item appears as background object on the field
 * @extends FieldItem
 * @class Live
 * */
var Live = function (_FieldItem) {
	_inherits(Live, _FieldItem);

	function Live(param) {
		_classCallCheck(this, Live);

		return _possibleConstructorReturn(this, (Live.__proto__ || Object.getPrototypeOf(Live)).call(this, param));
	}
	/**
  * collided player with live
  * @override
  * @fires 'game:live:collect' - player pick up live
  */


	_createClass(Live, [{
		key: 'collided',
		value: function collided() {
			_GM2.default.trigger('player:live:collect');
			this.hidden = true;
		}
	}]);

	return Live;
}(_fieldItem2.default);

exports.default = Live;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cloudLayer = __webpack_require__(8);

var _cloudLayer2 = _interopRequireDefault(_cloudLayer);

var _tubeLayer = __webpack_require__(15);

var _tubeLayer2 = _interopRequireDefault(_tubeLayer);

var _coinLayer = __webpack_require__(10);

var _coinLayer2 = _interopRequireDefault(_coinLayer);

var _liveLayer = __webpack_require__(17);

var _liveLayer2 = _interopRequireDefault(_liveLayer);

var _mapPreset = __webpack_require__(16);

var _mapPreset2 = _interopRequireDefault(_mapPreset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Field = function () {
	function Field(config) {
		_classCallCheck(this, Field);

		this.fieldMap = [];
		this.generateFieldMap(config.mapLength);
		this.createFieldsLayers(config);
	}

	_createClass(Field, [{
		key: 'createFieldsLayers',
		value: function createFieldsLayers(config) {
			this.cloudLayer = new _cloudLayer2.default();
			this.tubeLayer = new _tubeLayer2.default(config, this.fieldMap);
			this.coinLayer = new _coinLayer2.default(config, this.fieldMap);
			this.liveLayer = new _liveLayer2.default(config, this.fieldMap);
		}

		/**
   * create map  of the game
   */

	}, {
		key: 'generateFieldMap',
		value: function generateFieldMap(mapLength) {
			this.fieldMap = [_mapPreset2.default[6], _mapPreset2.default[6]];
			var sum = 0;
			for (var j = 0; j < _mapPreset2.default.length; j++) {
				sum += _mapPreset2.default[j].probability;
			}
			for (var i = 0; i < mapLength; i++) {
				var cnt = 0;
				var random = Math.random();
				for (var k = 0; k < _mapPreset2.default.length; k++) {
					cnt += _mapPreset2.default[k].probability;
					if (random * sum < cnt) {
						this.fieldMap.push(_mapPreset2.default[k]);
					}
				}
			}
		}

		/**
   * starts with each new tick of the game
   */

	}, {
		key: 'checkCollision',
		value: function checkCollision(config, player) {
			this.tubeLayer.checkCollision(player.x, player.y, player.width, player.height, config);
			this.coinLayer.checkCollision(player.x, player.y, player.width, player.height, config);
			this.liveLayer.checkCollision(player.x, player.y, player.width, player.height, config);
		}
	}, {
		key: 'move',
		value: function move(config, tickCnt) {
			this.cloudLayer.move();
			this.tubeLayer.move();
			this.liveLayer.move(config, tickCnt);
			this.coinLayer.move(config, tickCnt);
		}

		/**
   * draw  elements fields
   */

	}, {
		key: 'draw',
		value: function draw(ctx) {
			this.cloudLayer.draw(ctx);
			this.tubeLayer.draw(ctx);
			this.coinLayer.draw(ctx);
			this.liveLayer.draw(ctx);
		}
	}]);

	return Field;
}();

exports.default = Field;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resources = __webpack_require__(5);

var _resources2 = _interopRequireDefault(_resources);

var _resources3 = __webpack_require__(1);

var _resources4 = _interopRequireDefault(_resources3);

var _resources5 = __webpack_require__(21);

var _resources6 = _interopRequireDefault(_resources5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = location.href.indexOf('mario') > -1 ? _resources4.default : location.href.indexOf('packman') > -1 ? _resources6.default : _resources2.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Created by user on 10.04.2017.
 */
var res = {
	player: {
		src: "resources/pacman/player.png",
		sprite: true,
		gridWidth: 2,
		width: 16,
		height: 16,
		frequency: 5
	},
	playerUp: {
		src: "resources/pacman/playerUp.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 32,
		frequency: 3
	},
	playerUltimate: {
		src: "resources/pacman/playerUltimate.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 32,
		frequency: 3

	},
	cloudBig: {
		src: "resources/flappy/cloud_big.png",
		width: 0,
		height: 0
	},
	cloudMiddle: {
		src: "resources/flappy/cloud_middle.png",
		width: 0,
		height: 0
	},
	cloudSmall: {
		src: "resources/flappy/cloud_small.png",
		width: 0,
		height: 0
	},
	tubeHead: {
		src: "resources/pacman/tube_vertical_head.png",
		width: 78,
		height: 23
	},
	tube: {
		src: "resources/pacman/tube_vertical.png",
		width: 76,
		height: 2
	},
	tubeHeadDown: {
		src: "resources/pacman/tube_vertical_head_down.png",
		width: 76,
		height: 23

	},
	tubeDown: {
		src: "resources/pacman/tube_vertical.png",
		width: 76,
		height: 2
	},
	coin: {
		src: "resources/pacman/coin.png",

		width: 22,
		height: 24,
		frequency: 5
	},
	live: {
		src: "resources/pacman/live.png",
		width: 24,
		height: 32
	},
	gameover: {
		src: "resources/pacman/gameover.png",
		width: 640,
		height: 540
	},
	gamestart: {
		src: "resources/pacman/gamestart.png",
		width: 640,
		height: 540
	},
	bg: {
		color: '#222'
	}

};

exports.default = res;

/***/ })
/******/ ]);
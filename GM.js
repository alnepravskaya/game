import RM from './RM';
import game from './game';
import resources from './resources';

const GM = {
	init: function () {
		RM.init(resources);
		this.on('resources:loaded', game.init.bind(game));
	},
	trigger: function (event) {
		var e = new Event(event);
		document.body.dispatchEvent(e);
	},
	on: function (event, callback) {
		document.body.addEventListener(event, callback);
	}
};
window.onload = function () {
	GM.init();
};


export default GM;
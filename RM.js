/* exported RM */

import GM from './GM';
const RM = {
	init: function (resources) {
		let countFor = 0;
		let countload = 0;
		for (let key in resources) {
			if (resources[key].src) {
				const img = document.createElement('img');
				const way = resources[key].src;
				img.setAttribute('src', way);
				countFor++;
				img.addEventListener('load', (function () {
					resources[this.key].image = this.img;
					if (resources[this.key].sprite) {
						resources[this.key].countFrame = (resources[this.key].image.width - resources[this.key].gridWidth) / (resources[this.key].width + resources[this.key].gridWidth);
					}
					countload++;
					if (countFor == countload) {
						GM.trigger('resources:loaded');
					}
				}).bind({key: key, img: img}));
				document.getElementById('preloader').appendChild(img);
			}
		}
	}
};

export default RM;
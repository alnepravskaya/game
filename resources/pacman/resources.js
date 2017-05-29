/**
 * Created by user on 10.04.2017.
 */
const res = {
	player: {
		src: "resources/pacman/player.png",
		sprite: true,
		gridWidth: 2,
		width:16 ,
		height: 16,
		frequency:5
	},
	playerUp: {
		src: "resources/pacman/playerUp.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 32,
		frequency:3
	},
	playerUltimate: {
		src: "resources/pacman/playerUltimate.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 32,
		frequency:3


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
	coin:{
		src: "resources/pacman/coin.png",

		width: 22,
		height: 24,
		frequency:5
	},
	live: {
		src: "resources/pacman/live.png",
		width:24,
		height: 32
	},
	gameover:{
		src: "resources/pacman/gameover.png",
		width: 640,
		height: 540
	},
	gamestart:{
		src: "resources/pacman/gamestart.png",
		width: 640,
		height: 540
	},
	bg:{
		color:'#222'
	}

};

export default res;
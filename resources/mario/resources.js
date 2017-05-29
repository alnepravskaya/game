const res = {
	player: {
		src: "resources/mario/player.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 32,
		frequency:3,
		states:{
			staying:[0],
			died:[6],
			default:[1,2,3]
		}
	},
	playerUp: {
		src: "resources/mario/playerUp.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 64,
		frequency:3,
		states:{
			staying:[0],
			default:[1,2,3]
		}
	},
	playerUltimate: {
		src: "resources/mario/playerUltimate.png",
		sprite: true,
		gridWidth: 2,
		width: 32,
		height: 64,
		frequency:3,
		states:{
			staying:[0],
			default:[1,2,3]
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
	coin:{
		src: "resources/mario/coin.png",
		sprite: true,
		gridWidth: 2,
		width: 40,
		height: 56,
		frequency:6
	},
	live: {
		src: "resources/mario/live.png",
		width: 32,
		height: 32
	},
	gameover:{
		src: "resources/mario/gameover.png",
		width: 640,
		height: 540
	},
	gamestart:{
		src: "resources/mario/gamestart.png",
		width: 640,
		height: 540
	},
	bg:{
		color:'#6093fe'
	}
	
};

export default res;
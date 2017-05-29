const mapPreset = [
	{
		tube: {
			bottom: true
		},
		probability:5
	},
	{
		live: {
			middle: true
		},
		probability:10
	},
	{
		tube: {
			top: true
		},
		probability:4
	},
	{
		tube: {
			top: true,
			bottom: true
		},
		coin: {
			middle: true
		},
		probability:3
	},
	{
		tube: {
			top: true
		},
		coin: {
			bottom: true
		},
		probability:2

	},
	{
		tube: {
			bottom: true
		},
		coin: {
			top: true
		},
		probability:4
	},
	{
		coin: {
			middle: true
		},
		probability:3
	},
	{
		coin: {
			top: true,
			middle: true,
			bottom: true
		},
		probability:2
	},
	{
		coin: {
			top: true,
			bottom: true
		},
		probability:5
	},

	{
		tube: {
			top: true,
			bottom: true
		},
		probability:2
	}
];

export default mapPreset;
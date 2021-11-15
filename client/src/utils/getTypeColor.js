const getTypeColor = type => {
	switch (type) {
		case "Head to Head":
			return "secondary.main";
			// eslint-disable-next-line no-unreachable
			break;
		case "2 vs 2":
			return "info.main";
			// eslint-disable-next-line no-unreachable
			break;
		case "Multiplayer":
			return "success.main";
			// eslint-disable-next-line no-unreachable
			break;
		case "Relay":
			return "warning.main";
			// eslint-disable-next-line no-unreachable
			break;
		default:
			return "error.main";
			// eslint-disable-next-line no-unreachable
			break;
	}
};

module.exports = getTypeColor;

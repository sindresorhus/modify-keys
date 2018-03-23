'use strict';
module.exports = (object, transformer) => {
	const ret = {};

	for (const [key, value] of Object.entries(object)) {
		ret[transformer(key, value)] = value;
	}

	return ret;
};

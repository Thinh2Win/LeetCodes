/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    	if (sticks.length === 1) return 0;

	sticks.sort((a, b) => a - b);

	let output = 0;

	while (sticks.length) {
		const stick1 = sticks.shift();
		const stick2 = sticks.shift();
		const cost = stick1 + stick2;

		output += cost;

		if (sticks.length === 0) return output;

		let L = 0;
		let R = sticks.length;

		while (L < R) {
			const M = L + Math.floor((R - L) / 2);

			if (cost < sticks[M]) R = M;
			else L = M + 1;
		}

		sticks.splice(L, 0, cost);
	}
};
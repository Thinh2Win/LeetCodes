/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    if (sticks.length <= 1) return 0;
    sticks.sort((a, b) => a - b);
    let total = 0;
    while (sticks.length) {
        const combined = sticks.shift() + sticks.shift();
        total += combined;
        if (sticks.length === 0) return total;
        let L = 0;
        let R = sticks.length;
        while (L < R) {
            const mp = L + Math.floor((R - L) / 2); 
            if (combined < sticks[mp]) {
                R = mp;
            } else {
                L = mp + 1;
            }

        }
        sticks.splice(L, 0, combined);
    }
};
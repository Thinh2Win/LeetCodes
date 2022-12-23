/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
     if (sticks.length <= 1) return 0;
    sticks.sort((a, b) => b - a);
    let total = 0;
    while (sticks.length) {
        let combined = sticks.pop() + sticks.pop();
        total += combined;
        if (sticks.length === 0) return total;

        // re-insert combined stick back into array
        let L = 0;
        let R = sticks.length;
        while (L < R) {
            let mp = L + Math.floor((R - L) / 2);
            if (combined < sticks[mp]) {
                L = mp + 1;
            } else {
                R = mp;
            }
        }
        sticks.splice(L, 0, combined);
    }
};
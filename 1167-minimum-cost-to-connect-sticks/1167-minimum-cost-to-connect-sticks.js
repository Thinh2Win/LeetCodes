/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    let total = 0;
    sticks.sort((a, b) => a - b);
    while ((sticks.length > 1)) {
        let combined = sticks.shift() + sticks.shift();
        for (let i = 0; i <= sticks.length; i++) {
            if (i == sticks.length|| sticks[i] > combined) {
                sticks.splice(i, 0, combined);
                break;
            }
        }
        total += combined;
    }
    return total;
};
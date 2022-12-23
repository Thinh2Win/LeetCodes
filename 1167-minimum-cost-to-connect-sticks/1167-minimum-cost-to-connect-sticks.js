/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function(sticks) {
    let total = 0;
    sticks.sort((a, b) => b - a);
    while (sticks.length > 1) {
        let combined = sticks.pop() + sticks.pop();
        for (let i = sticks.length; i >= -1; i--) {
            if (i === -1 || sticks[i] > combined) {
                sticks.splice(i + 1, 0, combined);
                break;
            }
        }
        total += combined;
    }
    return total;
};
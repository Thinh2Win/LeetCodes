/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let range = Math.round((high - low) / 2);
    if (low % 2 === 1 && high % 2 === 1) range += 1;
    return range;
};
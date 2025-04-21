/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let minPref = 0;
    let maxPref = 0;
    let curr = 0;
    for (let num of differences) {
        curr += num;
        minPref = Math.min(minPref, curr);
        maxPref = Math.max(maxPref, curr);
    }
    let high = upper - maxPref;
    let low = lower - minPref;
    return Math.max(0, high - low + 1);
};
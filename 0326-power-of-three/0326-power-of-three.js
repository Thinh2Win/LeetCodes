/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0 || n === 2) return false;
    if (n === 1) return true;
    let curr = 3;
    while (curr < n) {
        curr *= 3;
    }
    return curr === n;
};
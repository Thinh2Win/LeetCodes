/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    let string = (n).toString(2);
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '1') count += 1;
    }
    return count;

};
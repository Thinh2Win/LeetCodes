/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    let times = Math.abs(n);
    let num = x ** times;
    if (n < 0) return 1 / num;
    return num;
};
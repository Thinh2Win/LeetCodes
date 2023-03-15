/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    let L = 0;
    let R = x;
    let prev = null;
    while (L < R) {
        let mp = ((R - L) / 2) + L;
        let product = mp * mp;
        if (prev === product) break;
        if (product > x) {
            R = mp;
        } else {
            L = mp;
        }
        prev = product;
    }
    return Math.floor(L);
};
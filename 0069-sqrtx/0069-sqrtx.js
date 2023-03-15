/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let L = 0;
    let R = x;
    while (L <= R) {
        let mp = Math.floor((R + L) / 2);
        let product = mp * mp;
        if (product > x) {
            R = mp - 1;
        } else if (product < x) {
            L = mp + 1;
        } else {
            return mp;
        }
    }
    return R;
};
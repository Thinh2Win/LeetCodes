/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    if (x < 0) {
        res = +`${x}`.split('').slice(1).reverse().join('') * -1
    } else {
        res = +`${x}`.split('').reverse().join('');
    }

    if (res > 2**31 - 1 || res < -(2**31)) return 0;
    return res;
};
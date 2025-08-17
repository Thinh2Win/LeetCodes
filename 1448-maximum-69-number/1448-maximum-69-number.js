/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let string = `${num}`.split('');
    let idx = string.indexOf('6');
    if (idx !== -1) string[idx] = '9';
    return +string.join('');
};
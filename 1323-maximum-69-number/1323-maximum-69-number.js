/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let string = JSON.stringify(num).split('');
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '6') {
            string[i] = '9';
            break;
        }
    }
    return +string.join('');
};
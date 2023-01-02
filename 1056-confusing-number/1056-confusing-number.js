/**
 * @param {number} n
 * @return {boolean}
 */
let invalids = {
    '2': true,
    '3': true,
    '4': true,
    '5': true,
    '7': true,
}
var confusingNumber = function(n) {
    let rotate = [];
    n = `${n}`;
    for (let j = 0; j < n.length; j++) {
        if (invalids[n[j]]) {
            return false;
        }
        if (n[j] === '6') {
            rotate.unshift('9');  
        } else if (n[j] === '9') {
            rotate.unshift('6');   
        } else {
            rotate.unshift(n[j]);
        }
    }
    if (n === rotate.join('')) return false;
    return true;
};
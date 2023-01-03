/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0;
    for (let i = 0; i < strs[0].length; i++) {
        let string = '';
        for (let j = 0; j < strs.length; j++) {
            string += strs[j][i];
        }
        if (string.split('').sort().join('') !== string) {
            count += 1;
        }
    }
    return count;
};
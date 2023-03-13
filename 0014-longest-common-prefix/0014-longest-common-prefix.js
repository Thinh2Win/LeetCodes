/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longest = '';
    let shortest = [Infinity, ''];
    strs.forEach(str => {
       if (str.length < shortest[0]) shortest[1] = str;
    });
    for (let i = 0; i < shortest[1].length; i++) {
        if (strs.every(str => str[i] === shortest[1][i])) {
            longest += shortest[1][i];
        } else {
            break;
        }
    }
    return longest;
};
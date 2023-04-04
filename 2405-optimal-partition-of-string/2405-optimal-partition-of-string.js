/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let map = {};
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            count += 1;
            map = {};
        } 
        map[s[i]] = true;
    }
    return count;
};
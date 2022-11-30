/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    arr.forEach(num => {
       map[num] ? map[num] += 1 : map[num] = 1; 
    });
    let freq = Object.values(map);
    let occur = {};
    for (let i = 0; i < freq.length; i++) {
        if (occur[freq[i]] === undefined) {
            occur[freq[i]] = true;
        } else {
            return false;
        }
    }
    return true;
};
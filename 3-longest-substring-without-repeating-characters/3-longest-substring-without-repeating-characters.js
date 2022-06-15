/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let split = s.split('');
    let map = {};
    let max = 0;
    let start = 0;
    for (let i = 0; i < split.length; i += 1) {
        if (map[split[i]] !== undefined && map[split[i]] >= start) {
            start = map[split[i]] + 1;
        }
        map[split[i]] = i;
        max = Math.max(max, i - start + 1);
    }
    return max; 
};
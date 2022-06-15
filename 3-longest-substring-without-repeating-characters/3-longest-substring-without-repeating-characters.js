/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    let split = s.split('');
    let map = {};
    let max = 0;
    for (let i = 0; i < split.length; i += 1) {
        for (let j = i; j < split.length; j +=1) {
             if (!map[split[j]]) {
            map[split[j]] = 1;            
        } else {
            max = Math.max(Object.keys(map).length, max);  
            map = {};
            break;
        }
        }
    }
    return Math.max(max, Object.keys(map).length); 
};
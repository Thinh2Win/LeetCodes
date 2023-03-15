/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    let sorted = strs.map(word => word.split('').sort().join(''));
    sorted.forEach((word, idx) => map[word] ? map[word].push(strs[idx]) : map[word] = [strs[idx]]);
    return Object.values(map);
};
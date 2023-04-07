/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let sorted = strs.map(string => string.split('').sort().join(''));
    let map = {};
    sorted.forEach((string, idx) => map[string] ? map[string].push(strs[idx]) : map[string] = [strs[idx]]);
    return Object.values(map);
};
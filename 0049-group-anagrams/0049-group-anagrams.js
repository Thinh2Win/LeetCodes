/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    strs.forEach((word, idx) => {
        map[idx] = word;
        strs[idx] = word.split('').sort().join('');
    });
    let anagrams = {};
    strs.forEach((word, idx) => {
       anagrams[word] ? anagrams[word].push(map[idx]) : anagrams[word] = [map[idx]]; 
    });
    return Object.values(anagrams);
};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    let set = new Set();
    let copy = strs.slice();
    for (let i = 0; i < copy.length; i++) {
        copy[i] = copy[i].split('').sort().join('');
        set.add(copy[i])
    }
    [...set].forEach((word, idx) => map[word] = idx);
    let answer = new Array(Object.keys(map).length).fill(0).map(zero => []);
    copy.forEach((string, idx) => {
        if (map[string] !== undefined) {
            answer[map[string]].push(strs[idx]);
        }
    });
    return answer;
};
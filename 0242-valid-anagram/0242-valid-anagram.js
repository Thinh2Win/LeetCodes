/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let sMap = {};
    let tMap = {};
    s.split('').forEach(char => sMap[char] ? sMap[char] += 1 : sMap[char] = 1);
    t.split('').forEach(char => tMap[char] ? tMap[char] += 1 : tMap[char] = 1);
    for (let key in tMap) {
        if (tMap[key] !== sMap[key]) return false;
    }
    return true;
};
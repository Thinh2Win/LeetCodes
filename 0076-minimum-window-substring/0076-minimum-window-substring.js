/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
        if (t.length > s.length) return '';
    let tMap = {};
    let wMap = {};
    let L = 0;
    let min = [Infinity, ''];
    t.split('').forEach(letter => tMap[letter] ? tMap[letter] += 1 : tMap[letter] = 1);
    for (let R = 0; R < s.length; R++) {
        let letter = s[R];
        wMap[letter] ? wMap[letter] += 1 : wMap[letter] = 1;
        while (Object.keys(tMap).every(key => tMap[key] <= wMap[key])) {
            if (R - L + 1 < min[0]) {
                min[0] = R - L + 1;
                min[1] = s.slice(L, R + 1);
            }
            wMap[s[L]] -= 1;
            L += 1;
        }
    }
    return min[1];
};
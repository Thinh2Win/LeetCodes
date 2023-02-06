/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {};
    let map2 = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] || map2[t[i]]) {
            if (map[s[i]] !== t[i] || map2[t[i]] !== s[i]) return false;
        } else {
            map[s[i]] = t[i];
            map2[t[i]] = s[i];
        }
    }
    return true;
};
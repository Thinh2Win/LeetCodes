/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const isAnagram = (m1, m2) => {
    for (key in m2) {
        if (m1[key] !== m2[key]) {
            return false;
        }
    }
    return true;
}
var findAnagrams = function(s, p) {
    let map1 = {};
    let map2 = {};
    let answer = [];
    p.split('').forEach(letter => map2[letter] ? map2[letter] += 1 : map2[letter] = 1);
    let L = 0;
    for (let R = 0; R < s.length; R++) {
        if (R - L >= p.length) {
            map1[s[L]] -= 1;
            L += 1;
        }
        map1[s[R]] ? map1[s[R]] += 1 : map1[s[R]] = 1;
        if (R - L + 1 === p.length && isAnagram(map1, map2)) {
            answer.push(L);
        }
    }
    return answer;
};
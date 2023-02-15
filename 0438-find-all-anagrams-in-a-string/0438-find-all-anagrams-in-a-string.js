/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const isAnagram = (map1, map2) => {
    for (key in map2) {
        if (map2[key] !== map1[key]) {
            return false;
        }
    }
    return true;
}

var findAnagrams = function(s, p) {
    let map1 = {};
    let map2 = {};
    let answer = [];
    let L = 0;
    p.split('').forEach(letter => map2[letter] ? map2[letter] += 1 : map2[letter] = 1);
    for (let R = 0; R < s.length; R++) {
        if (R - L >= p.length) {
            map1[s[L]] -= 1; 
            L += 1;
        }
        map1[s[R]] ? map1[s[R]] += 1 : map1[s[R]] = 1; 
        if ( isAnagram(map1, map2)) {
            answer.push(L);
        }
    }
    return answer; 
};
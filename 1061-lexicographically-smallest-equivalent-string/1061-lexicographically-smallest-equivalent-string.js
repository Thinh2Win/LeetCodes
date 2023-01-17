/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    let link = {};
    const find = (letter) => {
        if (link[letter] === undefined) link[letter] = letter;
        while (link[letter] !== letter) {
            link[letter] = link[link[letter]];
            letter = link[letter];
        }
        return letter;
    }
    const union = (a, b) => {
        let l1 = find(a);
        let l2 = find(b);
        if (l1 < l2) {
            link[l2] = l1;
        } else {
            link[l1] = l2;
        }
    }
    for (let i = 0; i < s1.length; i++) {
        union(s1[i], s2[i]);
    }
    let answer = '';
    for (let j = 0; j < baseStr.length; j++) {
        answer += find(baseStr[j]);
    }
    return answer;
};
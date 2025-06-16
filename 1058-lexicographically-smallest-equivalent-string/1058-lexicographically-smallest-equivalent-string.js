/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const parents = 'abcdefghijklmnopqrstuvwxyz'.split('');
    function find(char) {
        let idx = char.charCodeAt(0) - 97;
        if (char !== parents[idx]) {
            parents[idx] = find(parents[idx]);
        }
        return parents[idx];
    }
    function union(n1, n2) {
        let p1 = find(n1);
        let p2 = find(n2);
        let idx1 = p1.charCodeAt(0) - 97;
        let idx2 = p2.charCodeAt(0) - 97;
        if (p1 !== p2) {
            if (p1 < p2) parents[idx2] = p1
            else parents[idx1] = p2;
        }
    }

    for (let i = 0; i < s1.length; i++) {
       let char1 = s1[i];
       let char2 = s2[i];
       union(char1, char2);
    }

    let answer = [];
    for (let char of baseStr) {
        let idx = char.charCodeAt(0) - 97;
        answer.push(find(parents[idx]));
    }
    return answer.join('');
};
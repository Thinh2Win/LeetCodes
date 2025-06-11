/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const parents = 'abcdefghijklmnopqrstuvwxyz'.split('');
    function find(char) {
        if (parents[char.charCodeAt(0) - 97] !== char) {
            parents[char.charCodeAt(0) - 97] = find(parents[char.charCodeAt(0) - 97])
        }
        return parents[char.charCodeAt(0) - 97];
    }

    function union(c1, c2) {
        let p1 = find(c1);
        let p2 = find(c2);

        if (p1 !== p2) {
            if (p1 < p2) parents[p2.charCodeAt(0) - 97] = p1
            else parents[p1.charCodeAt(0) - 97] = p2
        }
    }
    for (let i = 0; i < s1.length; i++) {
        union(s1[i], s2[i]);
    }

    let answer = [];
    for (let char of baseStr) {
        answer.push(find(char));
    }
    return answer.join('');
};
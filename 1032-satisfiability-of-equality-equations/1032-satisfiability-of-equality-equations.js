/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let check = equations.filter(s => s[1] === '!');
    const parents = 'abcdefghijklmnopqrstuvwxyz'.split('');

    function find(char) {
        let idx = char.charCodeAt(0) - 97;
        if (char !== parents[idx]) {
            parents[idx] = find(parents[idx]);
        }
        return parents[idx];
    }

    function union(c1, c2) {
        let p1 = find(c1);
        let p2 = find(c2);

        if (p1 !== p2) {
            parents[p1.charCodeAt(0) - 97] = p2;
        }
    }

    for (let s of equations) {
        if (s[1] === '!') continue
        union(s[0], s.at(-1));
    }
    
    for (let s of check) {
        let p1 = find(s[0]);
        let p2 = find(s.at(-1));
        if (p1 === p2) return false;
    }
    return true;
}; 
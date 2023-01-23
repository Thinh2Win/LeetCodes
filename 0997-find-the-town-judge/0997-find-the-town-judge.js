/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (trust.length === 0 && n === 1) return n;
    let map = {};
    let people = {};
    trust.forEach(bond => {
       map[bond[1]] ? map[bond[1]] += 1 : map[bond[1]] = 1; 
        people[bond[0]] = true;
    });
    for (let i = 1; i <= n; i++) {
        if (map[i] === n - 1 && !people[i]) {
            return i;
        }
    }
    return -1;
};
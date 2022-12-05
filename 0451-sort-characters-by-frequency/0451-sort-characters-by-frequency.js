/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]][0] += 1 : map[s[i]] = [1, s[i]];
    }
    let values = Object.values(map);
    values.sort((a, b) => b[0] - a[0]);
    let answer = [];
    values.forEach(val => {
       let container = new Array(val[0]).fill(val[1]);
       answer.push(...container); 
    });
    return answer.join('');
};
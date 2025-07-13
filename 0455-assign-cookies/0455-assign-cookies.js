/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => b - a);
    s.sort((a, b) => b - a);
    let answer = 0;
    let p1 = 0;
    for (let child of g) {
        if (child <= s[p1]) {
            answer += 1;
            p1 += 1;
        }
    }
    return answer;
};
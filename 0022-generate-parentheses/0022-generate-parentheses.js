/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = [];
    const recurse = (string, open, close) => {
        if (open === 0 && close === 0) {
            answer.push(string);
            return;
        }
        if (open !== 0) {
            recurse(string + '(', open - 1, close);
        }
        if (close > open) {
            recurse(string + ')', open, close - 1);
        }
    }
    recurse('', n, n);
    return answer;
};
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = [];
    const recurse = (open, closing, string) => {
        if (open === 0 && closing === 0) {
            answer.push(string);
            return;
        }
        if (open !== 0) {
            recurse(open - 1, closing, string + '(');
        }
        if (closing !== 0 && closing > open) {
            recurse(open, closing - 1, string + ')');
        }
    };
    recurse(n, n, '');
    return answer;
};
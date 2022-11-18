/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let answer = '';
    let current = '';
    for (let i = 0; i < s.length; i++) {
        current += s[i];
        if (s[i] === '(') {
            stack.push('(');
        } else {
            stack.pop();
        }
        if (stack.length === 0) {
            answer += current.slice(1, current.length - 1);
            current = '';
        }
    }
    return answer;
};
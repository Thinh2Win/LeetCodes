/**
 * @param {string} s
 * @return {boolean}
 */
const parenthesis = {
    '(': ')',
    '{': '}',
    '[': ']'
}
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (parenthesis[s[i]]) {
            stack.push(parenthesis[s[i]]);
        } else {
            if (stack.pop() !== s[i]) return false;
        }
    }
    return stack.length ? false : true;
};
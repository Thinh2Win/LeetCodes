/**
 * @param {string} s
 * @return {boolean}
 */
const map = {
    '[': true,
    '(': true,
    '{': true,
    ']': '[',
    ')': '(',
    '}': '{',
}

var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === true) {
            stack.push(s[i]);
        } else {
            let check = stack.pop();
            if (map[s[i]] !== check) return false;
        }
    }
    if (stack.length) return false;
    return true;
};
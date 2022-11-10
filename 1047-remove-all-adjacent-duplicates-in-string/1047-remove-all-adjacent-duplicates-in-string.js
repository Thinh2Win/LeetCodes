/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        let top = stack.at(-1);
        if (s[i] === top) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};
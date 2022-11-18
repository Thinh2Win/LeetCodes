/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        map[letter] ? map[letter] += 1 : map[letter] = 1;
    }
    let stack = [s[0]];
    for (let j = 1; j < s.length; j++) {
        let current = s[j];
        while (stack.at(-1) > current && map[stack.at(-1)] > 1 && !stack.includes(current)) {
            let removed = stack.pop();
            map[removed] -= 1;
        }
        if (!stack.includes(current)) {
            stack.push(current);
        } else {
            map[current] -= 1;
        }
    }
    return stack.join('');
};
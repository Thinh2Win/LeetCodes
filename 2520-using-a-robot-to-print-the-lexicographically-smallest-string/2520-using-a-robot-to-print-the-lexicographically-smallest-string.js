/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    const freq = Array(26).fill(0);
    for (let char of s) {
        let idx = char.charCodeAt(0) - 97;
        freq[idx] += 1;
    }
    
    const stack = [];
    const answer = [];

    function hasLesserChar(char) {
        let idx = char.charCodeAt(0) - 97;
        for (let i = 0; i < idx; i++) {
            if (freq[i] > 0) return true;
        };
        return false;
    }

    for (let char of s) {
        stack.push(char);
        freq[char.charCodeAt(0) - 97] -= 1;
        while (stack.length && !hasLesserChar(stack.at(-1))) {
            answer.push(stack.pop());
        }
    }
    return answer.join('');
};
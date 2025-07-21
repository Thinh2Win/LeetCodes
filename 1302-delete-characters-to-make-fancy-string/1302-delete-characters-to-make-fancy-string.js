/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const answer = [s[0]];
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        let curr = s[i];
        let prev = s[i - 1];
        if (curr !== prev) count = 1, answer.push(curr)
        else count += 1, answer.push(curr);
        if (count === 3) count -= 1, answer.pop();
    }
    return answer.join('');
};
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    // stack to track parenthesis 
    // loop through and add parenthesis
    // keep track of starting idx 
    // if our stack is empty we found a range to add the contents 
    let answer = '';
    let sIdx = 0;
    let stack = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i])
        } else {
            // its a )
            stack.pop();
            if (stack.length === 0) {
                answer += s.slice(sIdx + 1, i);
                sIdx = i + 1;
            }
        }
    }
    return answer;
};
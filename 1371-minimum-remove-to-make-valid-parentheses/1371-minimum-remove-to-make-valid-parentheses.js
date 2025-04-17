/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    /**
        stack to track parenthesis, stack will hold idx of openining parenthesis 
        when looping if we reach a closing parenthesis, we can pop from our stack and change 
        the answer string idx to an opening parenthesis 
        then push in closing parenthesis 
        if the stack is empty, we know the closing parenthesis is invalid so push and empty string 
        once our loop finishes, any left over opening parenthesis are invalid 
        in which case we change those indexes to an empty string
        return the answer array joined 
    */

    let answer = [];
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === '(') {
            stack.push(i);
            answer.push(char);
        } else if (char === ')') {
            if (!stack.length) {
                answer.push('')
            } else {
                stack.pop();
                answer.push(char);
            }
        } else {
            answer.push(char);
        }
    }
    for (let idx of stack) {
        answer[idx] = '';
    }
    return answer.join('');
};
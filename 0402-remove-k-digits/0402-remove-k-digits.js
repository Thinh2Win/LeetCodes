/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];
    let count = 0;
    for (let char of num) {
        while (stack.length && char < stack.at(-1) && count < k) {
            stack.pop();
            count += 1;
        }
        stack.push(char);
    }
    while (count < k) stack.pop(), count += 1;
    while (stack.length && stack[0] === '0') stack.shift();
    let answer = stack.join('');
    return answer.length ? answer : '0';
};
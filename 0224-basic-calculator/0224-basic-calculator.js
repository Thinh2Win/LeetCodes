/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let string = s.split(' ').join('');
    let stack = [];
    let sign = 1;
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 0) {
            // its a number
            let num = '';
            while (string[i] >= 0) {
                num += string[i];
                i += 1;
            }
            sum += (+num * sign);
            i -= 1;
        } else if (string[i] === '+') {
            sign = 1;
        } else if (string[i] === '-') {
            sign = -1;
        } else if (string[i] === '(') {
            stack.push(sum);
            stack.push(sign);
            sum = 0;
            sign = 1;
        } else if (string[i] === ')') {
            let prevSign = stack.pop();
            let prevSum = stack.pop();
            sum *= prevSign;
            sum += prevSum;
        }
    }
    return sum;
};
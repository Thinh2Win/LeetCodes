/**
 * @param {string[]} tokens
 * @return {number}
 */
const doOperation = (num1, num2, operation) => {
    switch (operation) {
        case '+': 
        return num1 + num2;
        break;
        case '-': 
        return num1 - num2;
        break;
        case '*': 
        return num1 * num2;
        break;
        default: 
        return Math.trunc(num1 / num2);
    }
}
var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (Number.isInteger(parseInt(tokens[i]))) {
            stack.push(parseInt(tokens[i]));
        } else {
            let num2 = stack.pop();
            let num1 = stack.pop();
            stack.push(doOperation(num1, num2, tokens[i]));
        }
    }
    return stack[0];
};
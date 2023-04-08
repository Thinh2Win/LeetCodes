/**
 * @param {string[]} tokens
 * @return {number}
 */
const operators = {
    '+': true,
    '-': true,
    '*': true,
    '/': true,
}

var evalRPN = function(tokens) {
    // unless the token is a math symbol we push into the stack
    // if we get a math symbol we pop two from our stack and calculate
    // push result back into the stack 
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (operators[token]) {
            let n2 = stack.pop();
            let n1 = stack.pop();
            let num = calc(n1, n2, token);
            stack.push(num)
        } else {
            stack.push(token);
        }
    }
    return stack[0];
};

function calc(num1, num2, operation) {
    switch(operation) {
        case '+':
            return +num1 + +num2;
        case '-':
            return +num1 - +num2;
        case '*':
            return +num1 * +num2;
        case '/':
            return Math.trunc(+num1 / +num2);
    }
}


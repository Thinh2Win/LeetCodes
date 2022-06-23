/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []; 
    const operators = {
        '+': function(x, y) {return x + y},
        '-': function(x, y) {return x - y},
        '/': function(x, y) {return Math.trunc(x / y)},
        '*': function(x, y) {return x * y},
    }
    for (let i =0; i < tokens.length; i++) {
        if (!operators[tokens[i]]) {
            stack.push(tokens[i]);            
        } else {
            let num2 = parseInt(stack.pop()); 
            let num1 = parseInt(stack.pop()); 
            let newNum = operators[tokens[i]](num1, num2); 
            stack.push(newNum); 
        }
    }
    return stack[0];    
};
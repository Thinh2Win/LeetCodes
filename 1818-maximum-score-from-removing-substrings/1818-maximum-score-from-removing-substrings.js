/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    /*
        Greedy stack
        - use stack to track a's and b's 
        - depending on if x or y gives more points we will focus on ab or ba 
        - if y is more, everytime we add an 'a' we check the letter in our stack
            - if the letter in the stack is a b 
            - pop and add y points to total 
        - if x is more, everytime we add a 'b' we check the letter in stack
            - if the letter in stack is an 'a' 
            - pop and add x points to total
        - need another loop to go through and check if any valid x or y combos remain 
        - time: O(2n) -> O(n)
        - space: O(n)
    */
    let total = 0;
    if (y >= x) {
        const [yScore, leftOver] = calcYScore(s, y);
        const [xScore] = calcXScore(leftOver, x);
        total += (yScore + xScore);
    } else {
        // x > y
        const [xScore, leftOver] = calcXScore(s, x);
        const [yScore] = calcYScore(leftOver, y);
        total += (yScore + xScore);
    }
    return total;
};

function calcYScore (s, y) {
    const stack = []; 
    let total = 0;
    for (let char of s) {
        if (char === 'a' && stack.at(-1) === 'b') {
            stack.pop();
            total += y;
        } else {
            stack.push(char);
        }
    }
    return [total, stack.join('')];
}

function calcXScore (s, x) {
    const stack = []; 
    let total = 0;
    for (let char of s) {
        if (char === 'b' && stack.at(-1) === 'a') {
            stack.pop();
            total += x;
        } else {
            stack.push(char);
        }
    }
    return [total, stack.join('')];
}
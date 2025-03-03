/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    // stack 
    let stack = [];
    // if the stack is empty or if the top of the stack is a negative num or if current num is positive
    // we push in current num 
    // this will guarentee that top of our stack will be a positive number and current num will be negative
    for (let num of asteroids) {
        if (stack.length === 0 || stack.at(-1) < 0 || num > 0) {
            stack.push(num);
        } else {
    // else curr num is negative, so we check collision 
    // while stack num is positive and stack num < abs val of curr num we pop from stack 
            while (stack.at(-1) > 0 && stack.at(-1) < Math.abs(num)) {
                stack.pop();
            }
        // after loop, check if the top of the stack and asteroid num are equal
        // if so both are destroyed 
            if (stack.at(-1) === Math.abs(num)) {
                stack.pop()
            } else if (stack.length === 0 || stack.at(-1) < 0) {
                // curr asteroid wins
        //  push curr asteroid into stack 
                stack.push(num)
            }
        }

    }
    return stack;
};
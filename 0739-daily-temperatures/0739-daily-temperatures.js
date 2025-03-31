/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // have a stack to track temperatures by idxs
    // loop through temperatures and check if the curr temp is greater than top of stack 
    // if so we pop from stack to get the idx, and set an answer array at that idx = curr temp idx - popped idx 
    let stack = [];
    let answer = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        if (stack.length === 0) {
            stack.push(i);
            continue;
        };
        let currTemp = temperatures[i];
        while (currTemp > temperatures[stack.at(-1)]) {
            let idx = stack.pop();
            answer[idx] = i - idx;
        }
        stack.push(i);
    }
    return answer;
};
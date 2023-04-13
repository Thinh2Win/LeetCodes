/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    for (let i = 0; i < pushed.length; i++) {
        if (pushed[i] !== popped[0]) {
            stack.push(pushed[i]);
        } else {
            popped.shift();
            while (stack.at(-1) !== undefined && stack.at(-1) === popped[0]) {
                popped.shift();
                stack.pop();
            }
        }
    }
    return !stack.length && !popped.length;
};
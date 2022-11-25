/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
     let stack = [-1]
 let sum = 0;
 arr.push(0);
 for (let i = 0; i < arr.length; i++) {
        while (arr[i] < arr[stack.at(-1)]) {
            let idx = stack.pop();
            let left = idx - stack.at(-1);
            let right = i - idx;
            sum += (left * right * arr[idx]);
        }
        stack.push(i);
    }
 return sum % (10**9 + 7);
};
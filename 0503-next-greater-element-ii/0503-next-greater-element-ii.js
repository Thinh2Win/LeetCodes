/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    /*
       stack 
       as we go through nums array we check the front of our stack 
            if stack is empty or current number < front of stack we push in current num 
            else if front of stack is less than current number, we can pop from our stack and set 
            the index to the current number (answer array length of nums)
        since we can cycle, we loop twice to get answer 
            make sure to not change the answer idx second loop if it hasn't already been changed 
    */

    let stack = []; // [number, idx]
    let answer = new Array(nums.length).fill(-1);
    for (let times = 0; times < 2; times++) {
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            while (stack.length && stack.at(-1)[0] < num) {
                let [prev, idx] = stack.pop(); 
                answer[idx] = num;
            }
            stack.push([num, i])
        }
    }
    return answer;
};
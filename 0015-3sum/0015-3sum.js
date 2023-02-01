/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 3 pointers 
    // i, L, and R
    let answer = [];
    // sort nums array by acending order
    nums.sort((a, b) => a - b);
    // keep track of the sum of 3 pointers 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let L = i + 1;
        let R = nums.length - 1;
        while (L < R) {
            let total = nums[L] + nums[R] + nums[i];
            if (total > 0) {
                R -= 1;
            } else if (total < 0) {
                L += 1;
            } else {
                answer.push([nums[i], nums[L], nums[R]]);
                L += 1;
                R -= 1;
                while (nums[L] === nums[L - 1]) {
                    L += 1;
                }
                while (nums[R] === nums[R + 1]) {
                    R -= 1;
                }
            }
        }
    }
    return answer;
    // if the sum is greater than target '0'
    // we know to decrement R to shrink sum
    // if sum is less than target 
    // we know to increment L to increase sum 
    // if sum is equal to target, put i L and R into an array 
    // and push into answer array 
};
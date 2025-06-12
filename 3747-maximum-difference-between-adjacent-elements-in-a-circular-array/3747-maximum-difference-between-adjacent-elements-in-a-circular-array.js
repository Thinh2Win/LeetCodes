/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let answer = Math.abs(nums[0] - nums.at(-1));
    for (let i = 0; i < nums.length - 1; i++) {
        let num1 = nums[i];
        let num2 = nums[i + 1];
        answer = Math.max(Math.abs(num1 - num2), answer);
    }
    return answer;
};
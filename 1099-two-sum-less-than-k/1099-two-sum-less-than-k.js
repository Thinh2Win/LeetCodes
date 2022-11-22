/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    nums.sort((a, b) => a - b); 
    let L = 0;
    let R = nums.length - 1;
    let answer = -Infinity;
    while (L < R) {
        let sum = nums[L] + nums[R];
        if (sum >= k) {
            R -= 1;
        } else {
            answer = Math.max(answer, sum);
            L += 1;
        }
    }
    return answer === -Infinity ? -1 : answer;
};
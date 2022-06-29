/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let size = Infinity; 
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            size = Math.min(size, i - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return size === Infinity ? 0 : size;
};
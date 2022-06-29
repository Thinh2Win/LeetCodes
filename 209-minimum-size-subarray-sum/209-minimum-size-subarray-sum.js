/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 1;
    let sum = nums[0];
    let size = Infinity; 
    while (left < nums.length - 1) {
        if (right > nums.length) {
            break;
        }
        while (sum >= target) {
            size = Math.min(size, right - left);
            sum -= nums[left];
            left++; 
        } 
            sum += nums[right];
            right++;
    }
    return size === Infinity ? 0 : size;
};
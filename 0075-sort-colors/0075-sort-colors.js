/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let L = 0;
    let R = nums.length - 1;
    let i = 0;
    while (i <= R) {
        if (nums[i] === 0) {
            [nums[i], nums[L]] = [nums[L], nums[i]];
            L += 1;
            i += 1;
        } else if (nums[i] === 2) {
            [nums[i], nums[R]] = [nums[R], nums[i]];
            R -= 1;
        } else {
            i += 1;
        }
    }
};
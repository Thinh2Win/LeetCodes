/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let L = 0;
    let R = total;
    for (let i = 0; i < nums.length; i++) {
        R -= nums[i];
        if (L === R) {
            return i;
        }
        L += nums[i];
    }
    return -1;
};
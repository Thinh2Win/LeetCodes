/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let L = 0;
    let R = nums.length;
    while (L < R) {
        let mp = Math.floor((R - L) / 2 + L);
        if (nums[mp] > target) {
            R = mp;
        } else if (nums[mp] < target) {
            L = mp + 1;
        } else {
            return mp;
        }
    }
    return L;
};
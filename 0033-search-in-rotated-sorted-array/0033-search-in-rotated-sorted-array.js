/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0; 
    let R = nums.length - 1;
    while (L <= R) {
        let mp = Math.floor((R + L) / 2);
        if (nums[mp] === target) return mp;
        if (nums[L] <= nums[mp]) {
            if (nums[L] <= target && target <= nums[mp]) {
                R = mp - 1;
            } else {
                L = mp + 1;
            }
        } else {
            if (nums[R] >= target && target >= nums[mp]) {
                L = mp + 1;
            } else {
                R = mp - 1;
            }
        }
    }
    return -1;
};
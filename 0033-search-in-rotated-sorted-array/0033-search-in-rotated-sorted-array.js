/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
        let mp = Math.floor((R - L) / 2) + L;
        if (nums[mp] === target) return mp;
        if (nums[mp] >= nums[L]) {
            // in left quadrant
            if (nums[mp] >= target && nums[L] <= target) {
                    R = mp - 1;
            } else {
                L = mp + 1;
            }
        } else {
            // in right quadrant
            if (nums[mp] <= target && nums[R] >= target) {
                    L = mp + 1;
            } else {
                    R = mp - 1;
            }
        }
    }
    return -1;
};
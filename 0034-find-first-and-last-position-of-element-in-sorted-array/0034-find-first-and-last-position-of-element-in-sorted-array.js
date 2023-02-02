/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1,-1];
    let L = 0;
    let R = nums.length - 1;
    while (L < R) {
        let mp = Math.floor((R - L) / 2) + L;
        if (nums[mp] > target) {
            R = mp - 1;
        } else if (nums[mp] < target) {
            L = mp + 1;
        } else {
            // mp === target
            L = mp;
            R = mp;
        }
    }
    if (nums[L] !== target) return [-1,-1];
    let i1 = L;
    let i2 = R;
    while (nums[i1] === nums[L] || nums[i2] === nums[L]) {
        if (nums[i1] === nums[L]) {
            i1 -= 1;
        }
        if (nums[i2] === nums[L]) {
            i2 += 1;
        }
    }
    return [i1 + 1, i2 - 1];
};
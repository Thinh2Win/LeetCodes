/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let rotations = k % nums.length;
    if (rotations === 0) return nums;
    let end = nums.slice(nums.length - rotations);
    nums.splice(nums.length - rotations, rotations)
    nums.unshift(...end);
};
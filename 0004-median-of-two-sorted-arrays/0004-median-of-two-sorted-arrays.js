/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1, ...nums2].sort((a, b) => a - b);
    let mp = Math.floor(nums.length / 2);
    if (nums.length % 2 === 1) {
        return nums[mp];
    } else {
        return (nums[mp] + nums[mp - 1]) / 2;
    }
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let diff1 = [...set1].filter(num => !set2.has(num));
    let diff2 = [...set2].filter(num => !set1.has(num));

    return [diff1, diff2];
};
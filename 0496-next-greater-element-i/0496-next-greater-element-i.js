/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    for (let i = 0; i < nums2.length; i++) {
        map[nums2[i]] = i;
    }
    return nums1.map(num => {
        let nextGreatest = -1;
        let start = map[num] + 1;
        for (let j = start; j < nums2.length; j++) {
            if (nums2[j] > num) {
                nextGreatest = nums2[j];
                break;
            };
        }
        return nextGreatest;
    });
};
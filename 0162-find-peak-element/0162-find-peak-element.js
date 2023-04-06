/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // binary search
    // if the current num at mp is a peak return the index 
    // if the left is greater the current num, then elimate right side
    // if the right side is greater, eliminate left side 
    let L = 0;
    let R = nums.length - 1;
    while (L < R) {
        let mp = Math.floor((R - L) / 2) + L;
        let leftNum = nums[mp - 1] || -Infinity;
        let rightNum = nums[mp + 1] || -Infinity;
        let currNum = nums[mp];
        if (currNum > leftNum && currNum > rightNum) {
            return mp;
        } else if (leftNum > currNum) {
            R = mp;
        } else {
            L = mp + 1;
        }
    }
    return L;
};
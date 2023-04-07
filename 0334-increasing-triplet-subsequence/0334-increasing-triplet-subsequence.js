/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    for (let third = 0; third < nums.length; third++) {
        if (nums[third] > first && nums[third] > second) return true;
        if (nums[third] > first) {
            second = nums[third];
        } else {
            first = nums[third];
        }
    }
    return false;
};
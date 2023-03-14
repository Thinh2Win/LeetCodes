/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] <= nums.length && nums[i] > 0 && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        } else {
            i += 1;
        }
    }
         
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] !== j + 1) return j + 1;
    };
    return j + 1;
};
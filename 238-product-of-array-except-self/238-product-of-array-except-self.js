/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
     let results = [];
     let leftMult = 1;
    let rightMult = 1;
    for (let i = 0; i < nums.length; i++) {
        results[i] = leftMult;
        leftMult *= nums[i];
    }
    for (let j = nums.length - 1; j >= 0; j--) {
        results[j] *= rightMult;
        rightMult *= nums[j];
    }
    return results;
};
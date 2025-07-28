/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue
        let L = i - 1;
        let R = i + 1;
        while (nums[L] === nums[i] && L > 0) L -= 1;
        while (nums[R] === nums[i] && R < nums.length - 1) R += 1;
        if (nums[i] < nums[L] && nums[i] < nums[R] || nums[i] > nums[L] && nums[i] > nums[R]) count += 1; 
    }
    return count;
};
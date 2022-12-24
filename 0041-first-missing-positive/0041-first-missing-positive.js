/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let limit = nums.length;
        if (nums[i] <= limit && nums[i] > 0 && nums[i] !== i + 1) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            while (temp <= limit && temp > 0 && nums[temp - 1] !== temp) {
                let temp2 = nums[temp - 1];
                nums[temp - 1] = temp;
                temp = temp2;
            }
        }
    }
    console.log(nums)
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j + 1) {
            return j + 1;
        }
    }
    return nums.at(-1) + 1;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (map[nums[i]] === nums[i]) {
      return true;        
    } else {
      map[nums[i]] = nums[i];
    }
  }
  return false;
};
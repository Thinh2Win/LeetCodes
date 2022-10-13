/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
      let sum = 0;
    nums.forEach(num => sum += num);
  sum /= 2;
  let memo = new Map();
  return dfs(nums, sum, 0, memo);
};

const dfs = (nums, sum, idx, memo) => {
  if (sum === 0) {
    return true;
  }
  if (sum < 0 || idx === nums.length) {
    return false;
  }
  if (memo.has(`${idx}-${sum}`)) {
    return memo.get(`${idx}-${sum}`);
  }
  // either include current element or skip
  let res =
    dfs(nums, sum - nums[idx], idx + 1, memo) || dfs(nums, sum, idx + 1, memo);
  memo.set(`${idx}-${sum}`, res);
  return res;
};
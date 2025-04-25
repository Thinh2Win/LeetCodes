/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
  // freq of each prefix‐sum mod value
  const freq = new Map();
  // empty prefix (sum=0) occurs once
  freq.set(0, 1);

  let prefix = 0;
  let ans = 0;

  for (let x of nums) {
    // A[i] = 1 if x % modulo == k, else 0
    if (x % modulo === k) {
      prefix = (prefix + 1) % modulo;
    }
    // else prefix stays the same (adding 0)

    // how many earlier prefixes p satisfy (prefix - p) % modulo == k?
    //       p % modulo == (prefix - k) % modulo
    const need = (prefix - k + modulo) % modulo;
    ans += (freq.get(need) || 0);

    // record this prefix for future subarrays
    freq.set(prefix, (freq.get(prefix) || 0) + 1);
  }

  return ans;
};
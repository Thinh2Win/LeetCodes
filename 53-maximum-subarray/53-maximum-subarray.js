/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(array) {
      // let max, prev
  let max = -Infinity;
  let prev = 0;
  // iterate using for loop
  for (let i = 0; i < array.length; i += 1) {
    // if previous sum is less than current number
    prev = Math.max(prev + array[i], array[i]);
    max = Math.max(max, prev);
  }
  // previous sum = current number
  // if max is less than prev
  // max = prev
  return max;
};
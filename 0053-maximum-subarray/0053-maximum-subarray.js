/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // keep track of the max sum
    // keep track of curr sum 
    // loop through nums and add to curr sum 
    // if curr num >= curr sum reset curr sum to the num 
    let maxSum = -Infinity;
    let currSum = 0;
    for (let num of nums) {
        currSum += num;
        if (num >= currSum) currSum = num;
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    // Prefix Sum
    // idea is that currSum - prefixSum = subarray Sum 
    let map = {0: -1}; // preset idx 0 to help calculate subarray length correctly
    let currSum = 0;
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        currSum += num;
        if (!(currSum in map)) {
            map[currSum] = i; // keep track of the smallest idx for currSum to ensure we get longest length
        }
        // check if we have a valid prefix sum 
        let prefixSum = currSum - k;
        if (prefixSum in map) {
            // if valid prefixSum exists we know there was a subarray sum that was = k 
            answer = Math.max(answer, i - map[prefixSum]);
        }
    }
    return answer;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    /*
        if all the nums were positive we would just do sliding window,
        however with the introduction of negative numbers we no longer know when to reduce the window 
        so instead we do prefix sum 
        
        - we're tracking the running (prefix) sum at each index.
        - At each step, if the difference between the current prefix sum and k has been seen before in our map
        - it means there's a previous prefix sum such that the subarray between
        that previous index and the current index sums to \U0001d458
    */
    
    let preSums = {0:1} // sum: freq
    let total = 0; // current prefix sum 
    let count = 0;

    for (let num of nums) {
        total += num;

        if (preSums[total - k] !== undefined) {
            count += preSums[total - k]; 
        }

        preSums[total] ? preSums[total] += 1 : preSums[total] = 1;
    }
    return count;
};
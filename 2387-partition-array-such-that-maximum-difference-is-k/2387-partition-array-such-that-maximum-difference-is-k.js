/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    /*
        Sliding window
        - sort nums 
        - iterate through nums 
            - window start is min number of subarray 
            - window end is the max 
            - if the diff of max and min > k 
            - increment subarray count 
            - set window start to end 
        - return subarray count
    */

    let count = 0;
    nums.sort((a, b) => a - b);
    let L = 0;
    for (let R = 0; R < nums.length; R++) {
        let min = nums[L];
        let max = nums[R];
        if (max - min > k) {
            L = R;
            count += 1;
        }
    }
    count += 1;
    return count;
};
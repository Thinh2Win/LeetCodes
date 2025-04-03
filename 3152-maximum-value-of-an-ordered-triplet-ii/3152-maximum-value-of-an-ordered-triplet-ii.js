/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    /*
        Input: array nums
        Output: max value of all triplet indices 
        Constraints: 
            - nums array length? 10^6
            - triplet values? 10^ 5
        Edge: 
            - guarenteed triplets? nums >- 3?
            - empty nums array?

        Facts: 
            - a triplet are 3 numbers that follow i < j < k
            - score or value of a triplet is determined by (nums[i] - nums[j] * nums[k])

        Approach:
        - loop through nums and keep track of (run until second to last index)
            - max num from left (i)
            - min num (j)
            - track diff i - j at that index 
        - second loop goes backwards and calculates diff * k 
            - loop will track highest num from right  
    */

    let leftMax = 0;
    let min = Infinity;
    let diff = new Array(nums.length);

    for (let i = 0; i < nums.length - 1; i++) {
        let num = nums[i];
        if (num < min) min = num;
        if (num > leftMax) {
            leftMax = num;
            min = num;
        }
        diff[i] = leftMax - min;
    };
    
    let rightMax = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        diff[i] *= rightMax;
        if (num > rightMax) rightMax = num;
    }
    diff.pop();
    return Math.max(...diff);
};
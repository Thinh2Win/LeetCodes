/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.push(k);
    nums.sort((a, b) => b - a);
    if (nums[0] === k) {
        return nums.every(num => num === k) ? 0 : -1;
    };
    if (k > nums.at(-1)) return -1;
    // loop through and count how many nums are strictly less than the one before it
    /*
        ex. [5,5,5,4,2]
        4 is less than 5 
        2 is less than 4 
        2 operations needed 
    */

    let operations = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            operations += 1;
        }
    }
    return operations;
};
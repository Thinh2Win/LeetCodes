/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    // sliding window 
    /*
        window is length of total number of 1's 
        stack 2 nums arrays
        when window length is more than total 1's we shrink the window 
        so need to keep track of how many 1's we have in window 
        total swaps = window length - total 1's 
    */
    let swaps = Infinity;
    let total = nums.reduce((acc, num) => {
        if (num === 1) acc += 1;
        return acc;
    }, 0);
    let L = 0;
    let arr = [...nums, ...nums];

    let windowOnes = 0;
    for (let R = 0; R < arr.length; R++) {
        if (arr[R] === 1) windowOnes += 1;
        if (R - L + 1 > total) {
            if (arr[L] === 1) windowOnes -= 1;
            L += 1;
        }
        swaps = Math.min(swaps, total - windowOnes);
    }
    return swaps;
};
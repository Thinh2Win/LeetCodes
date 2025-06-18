/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    /*
        sort nums 
        slice nums into 3 arrays 
        check if first and last num of each array is less than or equal to k 
        if so w can return the 3 arrays else return empty array
    */

    nums.sort((a, b) => a - b);
    let n = nums.length / 3; // needs to be n arrays of length 3
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(nums.slice(i * 3, (i + 1) * 3));
    }
    const isValid = answer.every(arr => arr.at(-1) - arr[0] <= k);
    return isValid ? answer : [];
};
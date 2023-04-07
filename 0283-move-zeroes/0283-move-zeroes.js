/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    nums.forEach(num => { if(num === 0) count += 1});
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === 0) {
            nums.splice(i, 1);
        }
    }
    let zeros = new Array(count).fill(0);
    nums.push(...zeros);
};
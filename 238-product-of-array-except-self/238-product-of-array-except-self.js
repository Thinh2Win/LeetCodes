/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1);
    let start = 0;
    let end = nums.length - 1;
    let leftProduct = 1;
    let rightProduct = 1;
    while (start < nums.length) {
        answer[start] *= leftProduct;
        leftProduct *= nums[start];
        answer[end] *= rightProduct;
        rightProduct *= nums[end];
        start += 1;
        end -= 1;
    }
    return answer;
};
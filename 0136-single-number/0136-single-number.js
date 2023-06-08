/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer = 0;
    nums.forEach(num => answer ^= num);
    return answer;
};
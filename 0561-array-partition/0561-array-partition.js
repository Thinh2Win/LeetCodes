/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => b - a);
    let answer = 0;
    for (let i = 1; i < nums.length; i += 2) {
       answer += nums[i]; // usually we would find the min of the pairs but since we sorted we can just add the second
    }
    return answer;
};
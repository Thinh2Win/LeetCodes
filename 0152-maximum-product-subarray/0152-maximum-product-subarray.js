/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prevMin = nums[0];
    let prevMax = nums[0];
    let answer = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let options = [nums[i] * prevMin, nums[i], nums[i] * prevMax];
        prevMin = Math.min(...options);
        prevMax = Math.max(...options);
        answer = Math.max(answer, prevMax);
    };
    return answer;
};
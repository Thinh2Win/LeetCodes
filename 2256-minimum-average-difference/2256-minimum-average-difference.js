/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let min = Infinity;
    let answer = null;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let left = 0;
    for (let j = 0; j < nums.length - 1; j++) {
        sum -= nums[j];
        left += nums[j];
        let x = Math.floor(left / (j + 1));
        let y = Math.floor(sum / (nums.length - j - 1));
        let total = Math.abs(x - y);
        if (total < min) {
            answer = j;
            min = total;
        }
    }
    if ((left + nums.at(-1)) / (nums.length) < min) {
        return nums.length - 1;
    }
    return answer;
};
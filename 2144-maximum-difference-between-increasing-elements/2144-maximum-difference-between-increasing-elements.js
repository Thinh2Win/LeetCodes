/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let answer = -1; 
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        if (num === min) continue;
        answer = Math.max(answer, num - min);
        min = Math.min(num, min);
    }

    return answer;
};
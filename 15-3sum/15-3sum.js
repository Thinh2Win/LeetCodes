/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue; 
        }
        let start = i + 1;
        let end = nums.length - 1;
        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum > 0) {
                end -= 1;
            } else if (sum < 0) {
                start += 1;
            } else {
                answer.push([nums[i], nums[start], nums[end]]);
                start += 1;
                end -= 1;
              while (nums[start] === nums[start - 1]) {
                start += 1;
              }
              while (nums[end] === nums[end + 1]) {
                end -= 1;
              }
            }
        }
    }
    return answer;
};
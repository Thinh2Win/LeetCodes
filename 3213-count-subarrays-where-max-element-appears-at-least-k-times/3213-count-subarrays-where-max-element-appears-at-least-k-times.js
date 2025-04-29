/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let extraLeft = 0;
    let L = 0;
    let maxNum = Math.max(...nums);
    let maxCount = 0;
    let answer = 0;

    for (let R = 0; R < nums.length; R++) {
        if (nums[R] === maxNum) maxCount += 1;
        while (maxCount >=k ) {
            extraLeft += 1;
            if (nums[L] === maxNum) maxCount -= 1;
            L += 1;
        }
        answer += extraLeft;
    }
    return answer;
};
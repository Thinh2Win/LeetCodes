/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let answer = [];
    for (let i = 0; i < nums.length - 3; i++) {
         if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let L = j + 1;
            let R = nums.length - 1;
            while (L < R) {
                let sum = nums[i] + nums[j] + nums[L] + nums[R];
                if (sum > target) {
                    R -= 1;
                    while (L < R && nums[R] === nums[R + 1]) R -= 1;
                } else if (sum < target) {
                    L += 1;
                    while (L < R && nums[L] === nums[L - 1]) L += 1;
                } else {
                    // equal
                    answer.push([nums[i], nums[j], nums[L], nums[R]]);
                    R -= 1;
                    L += 1;
                    while (L < R && nums[L] === nums[L - 1]) L += 1;
                    while (L < R && nums[R] === nums[R + 1]) R -= 1;
                }
            }
        }
    }
    return answer;
};
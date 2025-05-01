/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let answer = [Infinity, 0]; // [diff, sum]
    for (let i = 0; i < nums.length - 2; i++) {
        let num1 = nums[i];
        let L = i + 1;
        let R = nums.length - 1;
        while (L < R) {
            let sum = num1 + nums[L] + nums[R];
            let diff = Math.abs(target - sum);
            if (diff < answer[0]) answer = [diff, sum];
            if (sum > target) {
                R -= 1;
            } else {
                L += 1;
            }
        }
    }
    return answer[1];
};
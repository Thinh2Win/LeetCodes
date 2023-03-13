/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // keep track of 3 sums
    let answer = [];
    // sort the array 
    nums.sort((a, b) => a - b);
    // iterate through nums array 
    for (let i = 0; i < nums.length; i++) {
        // create our window variables L R  
        if (nums[i] === nums[i - 1]) continue;
        let L = i + 1;
        let R = nums.length - 1;
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if (sum > 0) {
                R -= 1;
            } else if (sum < 0) {
                L += 1;
            } else {
                answer.push([nums[i], nums[L], nums[R]]);
                while (nums[L] === nums[L + 1]) L += 1;
                while (nums[R] === nums[R - 1]) R -= 1;
                R -= 1;
                L += 1;
            }
        }
    }
    return answer;
};
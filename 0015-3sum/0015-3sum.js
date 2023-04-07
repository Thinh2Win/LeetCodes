/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort nums array
    // need a base point and sliding window 
    // so basically a while loop implementing sliding window inside a forloop 
    // for our window
        // decrement R if the sum of 3 points is greater than target
        // increment L if the sum of 3 points is less than target 
        // else we have our target and should push the 3 numbers into a container and push the container into an answer array 
        // to avoid duplicates, use a set 
    nums.sort((a, b) => a - b);
    let answer = new Set();
    for (let i = 0; i < nums.length; i++) {
        let L = i + 1;
        let R = nums.length - 1;
        while (L < R) {
            let sum = nums[L] + nums[R] + nums[i];
            if (sum > 0) {
                R -= 1;
            } else if (sum < 0) {
                L += 1;
            } else {
                let container = JSON.stringify([nums[L], nums[R], nums[i]]);
                answer.add(container);
                L += 1;
                R -= 1;
            }
        }
    }
    return [...answer].map(container => JSON.parse(container));
};
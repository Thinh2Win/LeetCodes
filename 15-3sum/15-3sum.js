/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    let mySet = new Set();
    for (let i = 0; i < nums.length; i += 1) {
        
        let left = i + 1;
        let right = nums.length - 1;
        let target = 0 - nums[i];
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum < target) {
                left += 1;
            } else if (sum > target) {
                right -= 1;
            } else {
                mySet.add(JSON.stringify([nums[i], nums[left], nums[right]].sort()));
                right -= 1;
                left += 1;
            }
        }
    }
    let answer = [...mySet].map(array => {
    return JSON.parse(array);
    });
    return answer;   
};
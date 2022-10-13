/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let target = 0;
    nums.forEach(num => target += num);
    if (target % 2 === 1) return false; 
    target /= 2;
    let combos = new Set();
    combos.add(0);
    for (let i = 0; i < nums.length; i++) {
        let set = [...combos];
        for (let j = 0; j < combos.size; j++) {
            if (combos.has(target)) return true
            combos.add(nums[i] + set[j]);
        }
    }
    return false;
};
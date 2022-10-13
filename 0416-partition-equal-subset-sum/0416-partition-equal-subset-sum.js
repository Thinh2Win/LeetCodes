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
    nums.forEach(num => {
        [...combos].forEach(number => {
            combos.add(number + num);
        });
    });
    return combos.has(target);
};
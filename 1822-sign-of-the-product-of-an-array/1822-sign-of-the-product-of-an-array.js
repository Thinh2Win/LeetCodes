/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let hasZero = false;
    let numOfNegatives = 0;
    nums.forEach(num => {
        if (num === 0) hasZero = true;
        if (num < 0) numOfNegatives += 1;
    });
    if (hasZero) return 0;
    return numOfNegatives % 2 === 1 ? -1 : 1;
};
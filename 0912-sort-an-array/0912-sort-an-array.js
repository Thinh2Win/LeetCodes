/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length === 1) {
        return nums;
    }
    let mp = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mp));
    let right = sortArray(nums.slice(mp));
    let container = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            let num = left.shift();
            container.push(num);
        } else {
            let num = right.shift();
            container.push(num);
        }
    }
    left.length ? container.push(...left) : container.push(...right);
    return container;
};
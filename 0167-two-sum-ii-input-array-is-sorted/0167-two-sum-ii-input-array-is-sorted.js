/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let L = 0;
    let R = numbers.length - 1;
    while (L < R) {
        let sum = numbers[L] + numbers[R];
        if (sum > target) {
            R -= 1;
        } else if (sum < target) {
            L += 1;
        } else {
            return [L + 1, R + 1];
        }
    }
};
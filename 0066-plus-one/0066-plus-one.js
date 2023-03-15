/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    digits[i] += 1;
    while (digits[i] > 9) {
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
        } else {
            digits[i - 1] += 1;      
        }
        i -= 1;
    }
    return digits;
};
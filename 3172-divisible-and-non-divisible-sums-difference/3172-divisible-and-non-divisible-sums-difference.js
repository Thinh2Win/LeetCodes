/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1 = 0;
    let num2 = 0;

    for (let num = 1; num <= n; num++) {
        if (num % m === 0) num2 += num
        else num1 += num;
    }
    return num1 - num2;
};
/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    /*
    middle col = current minute + minute before
    5 = 3 + 2 or 7 = 4 + 3
    total squares = middle col + 2 * (sum of odds from 1 to (middle col - 2))
    = 7 + 2 * (1 + 3 + 5)
    = 7 + 2 * 9 = 7 + 18 = 25
    */

    let mid = n + n - 1;
    let sumOfOdds = calculateSumOfOdds(mid - 2)
    let total = mid + 2 * sumOfOdds;
    return total;
};

function calculateSumOfOdds(end) {
    let sum = 0;
    for (let i = 1; i <= end; i+=2) {
        sum += i
    }
    return sum;
}
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Array(n + 1).fill(Infinity);
    let squares = [1];
    let i = 2;
    while (squares.at(-1) <= n) {
        squares.push(i**2);
        i += 1;
    }
    squares.forEach(square => {
        for (let j = square; j < dp.length; j++) {
            if (j === square) {
                dp[j] = 1;
            } else {
                dp[j] = Math.min(dp[j - square] + 1, dp[j]);
            }
        }
    });
    return dp.at(-1);
};
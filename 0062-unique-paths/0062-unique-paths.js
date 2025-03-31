/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // since the robot can only come from 2 directions 
    // work backwards from the end 
    // from the end we can only reach it from the top square, or left square 
    // set those as 1 
    // we can calculate the total unique paths of a square by adding the total of its bottom square and right square
    const dp = Array.from({length: m - 1}, () => {
        let arr = new Array(n).fill(0);
        arr[arr.length - 1] = 1;
        return arr;
    });
    // fill bottom row with 1's 
    dp.push(new Array(n).fill(1));
    // starting from sencond to last row, iterate backwards and calculate square by adding the square to its right and bottom
    for (let row = m - 2; row >= 0; row--) {
        for (let col = n - 2; col >= 0; col--) {
            dp[row][col] = dp[row + 1][col] + dp[row][col + 1]
        }
    } 
    return dp[0][0];
};
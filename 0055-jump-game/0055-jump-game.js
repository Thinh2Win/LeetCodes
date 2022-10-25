/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(array) {
    let dp = new Array(array.length - 1);
    for (let i = array.length - 2; i >= 0; i--) {
        if (array[i] + i >= array.length - 1) {
            dp[i] = 1;
        } else {
            let min = Infinity;
            for (let j = i + 1; j <= i + array[i]; j++) {
                min = Math.min(min, dp[j]);
            }
            dp[i] = min + 1;
        }
    }
    return dp[0] === Infinity ? false : true;
};
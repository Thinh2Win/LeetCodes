/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    let max = -Infinity;
    let arr = [];
    ages.forEach((age, idx) => {
        arr.push([age, scores[idx]]);
    });
    arr.sort((a, b) => {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    });
    let dp = new Array(ages.length).fill(0);
    for (let i = 0; i < ages.length; i++) {
        dp[i] = arr[i][1];
        for (let j = 0; j < i; j++) {
            if (arr[i][1] >= arr[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + arr[i][1]);
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};
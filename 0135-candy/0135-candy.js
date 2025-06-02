/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    /*
        dp array to track candies 
        2 loops 
            1st loop from left to right
                - updates dp value to the value before + 1 if higher rank 
            2nd loop from right to left
                - updates dp value to value before + 1 if higher rank and 
                - amount of current candies is less than or equal to the kid before 
        sum up candies of dp array 
    */
    let n = ratings.length; // number of kids
    const dp = new Array(n).fill(1); // each kid should get min 1 candy 
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) dp[i] = dp[i - 1] + 1;
    }
    for (let i = n - 1; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && dp[i] <= dp[i + 1]) dp[i] = dp[i + 1] + 1;
    }
    return dp.reduce((num, acc) => acc += num, 0);
};
/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    // dp 
    // questions = [[3, 2], [4, 3], [4, 4], [2, 5]]
    /*
        create a dp array of length questions 
        working backwards we can find the max points we can achieve 
        dp = [0 0 0 0]
            - dp[idx] = current points + dp points at curr idx + brainpower + 1 
            - if currIdx + brainpower is > questions.length (out of bounds) add 0 instead
        idx 3 
            - dp[3] = 2 + dp[3 + 5 + 1] || 0 = 2
            - dp = [0, 0, 0, 2]
        idx 2 
            - dp[2] = 4 + dp[2 + 4 + 1] || 0 = 4
            - dp = [0, 0, 4, 2]
        idx 1 
            - dp[1] = 4 + dp[1 + 3 + 1] || 0 = 4
            - dp = [0, 4, 4, 2]
        idx 0
            - dp[0] = 3 + dp[0 + 2 + 1] || 0 = 3 + 2 = 5
            - dp = [5, 4, 4, 2];
        take the max of dp as our answer; 
    */

    const dp = new Array(questions.length).fill(0);

    for (let i = questions.length - 1; i >= 0; i--) {
        let [points, brainpower] = questions[i];
        dp[i] = points + (dp[i + brainpower + 1] || 0);
        if (dp[i + 1] > dp[i]) dp[i] = dp[i + 1];
    }
    return dp[0];
};
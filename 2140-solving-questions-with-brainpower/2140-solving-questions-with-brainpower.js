/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    /*
    bottom up approach 
    
    create a dp array where the index corresponds to the index of questions 
    
    dp index will tell us the max points possible at the index for the corresponding 
    question 
    
    start at end of index and work our way up (iterate backwards)
    
    
    max at the end will always be set to the amount of points (set dp[i] = questions[0])
    
    if current question brainpower + index (i) > questions.length - 1 we know to set 
    the dp[i] = points
    
    else (its < questions.length - 1) the dp[i] = max of either
        - current points + the question points thats index + brainpower away (point a)
        - or the dp indexes that are point a brainpower away from point a 
        
    after iteration dp[0] will contain max points possible
    */
    let answer = questions.at(-1)[0];
    let dp = new Array(questions.length).fill([0, 0]);
    dp[dp.length - 1] = questions.at(-1);
    for (let i = questions.length - 2; i >= 0; i--) {
        let points = questions[i][0];
        let brainpower = questions[i][1];
        if (brainpower + i >= questions.length - 1) {
            dp[i] = questions[i];
        } else {
            let next = i + brainpower + 1;
            let max = points + dp[next][0];
            for (let j = next + 1; j <= next + dp[next][1]; j++) {
                if (j > questions.length - 1) break;
                max = Math.max(max, points + dp[j][0]);
            }
            dp[i] = [max, brainpower];
        }
        answer = Math.max(answer, dp[i][0]);
    }
    return answer;
};
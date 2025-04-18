/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

    const dp = Array.from({length: word1.length + 1}, () => new Array(word2.length + 1).fill(0));
    for (let i = 0; i <= word2.length; i++) dp[0][i] = i;
    for (let j = 0; j <= word1.length; j++) dp[j][0] = j;
 
    for (let col = 1; col <= word2.length; col++) {
        let char2 = word2[col - 1];
        for (let row = 1; row <= word1.length; row++) {
            let char1 = word1[row - 1];
            let top = dp?.[row - 1]?.[col] || 0;
            let left = dp?.[row]?.[col - 1] || 0;
            let diagonal = dp?.[row - 1]?.[col - 1] || 0;
            if (char1 === char2) {
                dp[row][col] = diagonal;
            } else {
                dp[row][col] = Math.min(top + 1, left + 1, diagonal + 1)
            }
        }
    }
    return dp.at(-1).at(-1);
};
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(str1, str2) {
    let memo = {};
    const DFS = (idx1, idx2, currentString) => {
        if (idx1 < 0 || idx2 < 0) {
            return 0;
        }
        let key = `${idx1},${idx2}`;
        if (key in memo) return memo[key];
        let result = 0;
        if (str1[idx1] === str2[idx2]) {
            result = DFS(idx1 - 1, idx2 - 1, currentString + str1[idx1]) + 1;
        } else {
            result = Math.max(DFS(idx1, idx2 - 1, currentString), DFS(idx1 - 1, idx2, currentString));
        }
        memo[key] = result;
        return result;
    }
    return DFS(str1.length - 1, str2.length - 1, '');
};
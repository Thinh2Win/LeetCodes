/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict)
    let memo = new Map();
    const DFS = (string) => {
        if (memo.has(string)) return memo.get(string);
        if (set.has(string)) return true;
        for (let i = 1; i < string.length; i++) {
            if (set.has(string.substring(0, i)) && DFS(string.substring(i, string.length))) {
                memo.set(string, true);
                return true;
            }
        }
        memo.set(string, false);
        return false;
    };
    return DFS(s);
};
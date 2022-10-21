/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let memo = {};
    const DFS = (index) => {
        let result = 0;
        if (memo[index] !== undefined) {
            return memo[index];
        }
        if (index === s.length) {
            return 1;
        }
console.log(+s[index] + +s[index + 1])
        result += +s[index] > 0 ? DFS(index + 1) : 0;
        result += +s[index] !== 0 && s[index + 1] !== undefined && +(s[index] + s[index + 1]) <= 26 ? DFS(index + 2) : 0;
        memo[index] = result;
        return result;
    };
    return DFS(0);
};
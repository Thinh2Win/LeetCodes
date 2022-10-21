/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length < 0 || s[0] === '0') return 0;
    let cache = {};
    const DFS = (index) => {
        let result = 0;
        if (index === s.length) {
            return 1;
        }
        if (cache[index] !== undefined) {
            return cache[index];
        }
        result += s[index] > 0 ? DFS(index + 1) : 0;
        result += +s[index] !== 0 && s[index+1] !== undefined && s[index]+s[index+1] < 27 ? DFS(index + 2) : 0;
        cache[index] = result;
        return result;
    }
    return DFS(0);
};
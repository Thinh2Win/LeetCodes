/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length < 0 || s[0] === '0') return 0;
    let cache = [];
    const DFS = (index) => {
        let result = 0;
        if (index == s.length) {
            return 1;
        }
        if (cache[index] != null) {
            return cache[index];
        }
        if (s[index] > 0) {
          result += DFS(index + 1);  
        } 
        if (s[index] != 0 && s[index+1] != null && s[index]+s[index+1] < 27) {
          result += DFS(index + 2);  
        } 
        cache[index] = result;
        return result;
    }
    return DFS(0);
};
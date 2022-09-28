/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let map = {};
    wordDict.forEach(word => map[word] = true);
    let q = [0];
    let visited = new Set();
    while (q.length) {
        let start = q.pop();
        if (!visited.has(start)) {
            for (let end = start + 1; end <= s.length; end++) {
                if (map[s.slice(start, end)]) {
                    if (end === s.length) {
                        return true;
                    }
                    q.push(end);
                }
            }
            visited.add(start);
        }
    }
    return false;
};
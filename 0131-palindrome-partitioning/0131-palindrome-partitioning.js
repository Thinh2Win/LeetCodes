/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let answer = new Set();
    const DFS = (idx, string, container) => {
        if (idx === s.length) {
            if (string.length === 0) {
                answer.add(container);    
            }
            return;
        }
        string += s[idx];
        if (isPalindrome(string)) {
            DFS(idx + 1, '', [...container, string]);
        }
        DFS(idx + 1, string, container);
    };
    DFS(0, '', []);
    return [...answer];
};

function isPalindrome(word) {
    if (word.length === 1) return true;
    let L = 0;
    let R = word.length - 1;
    while (L < R) {
        if (word[L] !== word[R]) {
            return false;
        };
        L += 1;
        R -= 1;
    }
    return true;
}
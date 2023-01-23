/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (string) => {
    if (string.length === 1) return true;
    let L = 0;
    let R = string.length - 1;
    while (L < R) {
        if (string[L] !== string[R]) return false;
        L += 1; 
        R -= 1;
    }
    return true;
}
var partition = function(s) {
    let answer = [];
    const DFS = (idx, string, container) => {
        if (idx === s.length) {
            if (container.join('').length === s.length) {
                answer.push(container);
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
    return answer;
};
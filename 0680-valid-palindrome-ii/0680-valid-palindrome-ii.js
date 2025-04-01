/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let L = 0; 
    let R = s.length - 1;

    while (L < R) {
        if (s[L] !== s[R]) {
           return isPalindrome(L + 1, R, s) || isPalindrome(L, R - 1, s);
        } 
        L += 1;
        R -= 1;
    }
    return true;
};

function isPalindrome(left, right, s) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left += 1;
        right -= 1;
    }
    return true;
}
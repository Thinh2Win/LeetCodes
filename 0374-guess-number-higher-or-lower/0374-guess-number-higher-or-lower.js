/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    // binary search 
    let L = 1;
    let R = n;
    while (true) {
     let mp = Math.floor((L + R) / 2);
        if (guess(mp) === -1) {
            R = mp - 1;
        } else if (guess(mp) === 1) {
            L = mp + 1;
        } else {
            return mp;
        }   
    }
};
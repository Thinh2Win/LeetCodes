/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let odds = 0;
    for (let num of arr) {
        if (num % 2 === 1) odds += 1;
        else odds = 0; 
        
        if (odds >= 3) return true
    };
    return false;
};
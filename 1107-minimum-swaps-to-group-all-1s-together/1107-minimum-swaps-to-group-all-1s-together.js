/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    // idea: min amount of swaps is most efficient where 1's are most frequently grouped together 
    // sliding window
    // first count how many 1's are in the array 
    let count = data.filter(num => num === 1).length;
    let max = 0;
    let L = 0;
    let windowCount = 0;
    for (let R = 0; R < data.length; R++) {
        if (data[R] === 1) windowCount += 1;
    // window length = amount of 1's 
        if (R - L > count - 1) {
            if (data[L] === 1) windowCount -= 1;
            L += 1;
        }
    // with window, find max amount of ones within the window 
    // keep track of the max
        max = Math.max(max, windowCount);
    }
    // min swaps = amount of 1's - max
    return count - max;  
};
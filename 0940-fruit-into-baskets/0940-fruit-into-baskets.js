/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    /*
        Sliding window
        - keep track of fruit types in window
        - if we reach more than 3 fruit types we shrink the window 
        - keep track of max window length
    */

    let maxFruit = 0;
    let L = 0;
    let types = new Map();
    
    for (let R = 0; R < fruits.length; R++) {
        types.set(fruits[R], (types.get(fruits[R]) || 0) + 1);
        while (types.size > 2) {
            types.set(fruits[L], types.get(fruits[L]) - 1);
            if (types.get(fruits[L]) === 0) types.delete(fruits[L]);
            L += 1;
        }
        maxFruit = Math.max(maxFruit, R - L + 1);
    }
    return maxFruit;
};
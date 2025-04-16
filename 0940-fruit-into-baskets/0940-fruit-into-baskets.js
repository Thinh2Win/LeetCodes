/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    /*
        sliding window 
        starting from idx 0 
        keep track of how many types of fruit we have 
        if we reach 3 different types we shrink window until we only have 2 
        record longest window length 
    */

    let answer = 0;
    let L = 0;
    let types = 0;
    const freq = {};

    for (let R = 0; R < fruits.length; R++) {
        let fruit = fruits[R];
        if (!freq[fruit]) {
            freq[fruit] = 1;
            types += 1;
        } else {
            freq[fruit] += 1;
        }
        while (types > 2) {
            freq[fruits[L]] -= 1;
            if (freq[fruits[L]] === 0) types -= 1;
            L += 1;
        }
        answer = Math.max(answer, R - L + 1);
    }
    return answer;
};
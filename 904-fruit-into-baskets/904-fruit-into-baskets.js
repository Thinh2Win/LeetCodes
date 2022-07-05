/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let L = 0;
    let map = {};
    let maxLength = -Infinity;
    for (R = 0; R < fruits.length; R++) {
        if (map[fruits[R]] === undefined) {
            map[fruits[R]] = 1;
        } else {
            map[fruits[R]]++;
        }

        while(Object.keys(map).length > 2) {
            maxLength = Math.max(maxLength, R - L);
            if(map[fruits[L]] - 1 === 0) {
                delete map[fruits[L]];
            } else {
                map[fruits[L]]--;
            }
            L++;
        }
    }
     maxLength = Math.max(maxLength, R - L);
    return maxLength === -Infinity ? fruits.length : maxLength;
};
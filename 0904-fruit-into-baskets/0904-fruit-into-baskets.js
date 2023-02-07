/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let L = 0;
    let map = {};
    let max = -Infinity;
    let count = 0;
    for (let R = 0; R < fruits.length; R++) {
        map[fruits[R]] ? map[fruits[R]] += 1 : map[fruits[R]] = 1;
        count += 1;
        while (Object.keys(map).length > 2) {
            map[fruits[L]] -= 1;
            count -= 1;
            if (map[fruits[L]] === 0) {
                delete map[fruits[L]];
            }
            L += 1;
        }
        max = Math.max(max, count);
    }
    return max;
};
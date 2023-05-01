/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max= -Infinity;
    let min = Infinity;
    let total = 0;
    for (let i = 0; i < salary.length; i++) {
        max = Math.max(max, salary[i]);
        min = Math.min(min, salary[i]);
        total += salary[i];
    };
    total -= max;
    total -= min;
    return total /= (salary.length - 2);
};
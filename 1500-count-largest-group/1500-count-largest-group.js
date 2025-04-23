/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let max = 0; 
    let groups = {};
    for (let i = 1; i <= n; i++) {
        let string = `${i}`.split('');
        let num = 0;
        for (let char of string) {
            num += +char;
        }
        groups[num] = (groups[num] || 0) + 1;
        max = Math.max(max, groups[num]);
    }
    return Object.values(groups).reduce((acc, count) => {
        if (count === max) acc += 1;
        return acc;
    }, 0);
};
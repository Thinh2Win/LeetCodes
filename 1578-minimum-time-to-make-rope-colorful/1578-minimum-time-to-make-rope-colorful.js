/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let sum = 0; 
    for (let i = 0; i < colors.length; i++) {
        let unRemoved = neededTime[i];
        while (colors[i] === colors[i + 1]) {
             if (unRemoved < neededTime[i + 1]) {
                sum += unRemoved;
                unRemoved = neededTime[i + 1];
            } else {
                sum += neededTime[i + 1];
            }
        i += 1; 
        }
    }
    return sum;
};
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0 ) return 0; 
    let res = duration;
    for (let i = 1; i < timeSeries.length; i++) {
        console.log(res)
            res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
        console.log(res)
    }
    return res; 
};
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (duration === 0) return 0;
    let intervals = [];
    timeSeries.forEach(time => intervals.push([time, time + duration - 1]));
    let merged = [intervals[0]];
    intervals.forEach(interval => {
       if (merged.at(-1)[1] >= interval[0]) {
           merged[merged.length - 1] = [merged.at(-1)[0], interval[1]];
       } else {
           merged.push(interval);
       } 
    });
    let count = 0;
    merged.forEach(merge => {
       let diff = merge[1] - merge[0];
        if (diff > 1) {
            count += diff + 1
        } else if (diff === 1) {
            count += 2; 
        } else {
            count += 1;
        }
    });
    return count;
};
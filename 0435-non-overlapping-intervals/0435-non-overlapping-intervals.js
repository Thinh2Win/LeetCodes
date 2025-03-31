/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    let arr = [intervals[0]];
    let count = 0;
    
    for (let i = 1; i < intervals.length; i++) {
        let [s1, e1] = arr.at(-1);
        let [s2, e2] = intervals[i];
    
        if (e1 > s2) {
            count += 1;
            arr[arr.length - 1][1] = Math.min(e1, e2);
        } else {
            arr.push(intervals[i]);
        }
    };
    return count;
};
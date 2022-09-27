/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let answer = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let lastInterval = answer[answer.length - 1];
        if (lastInterval[1] >= intervals[i][0]) {
            let minInterval = Math.min(lastInterval[0], intervals[i][0]);
            let maxInterval = Math.max(lastInterval[1], intervals[i][1]);    
            answer[answer.length - 1] = [minInterval, maxInterval];
        } else {
            answer.push(intervals[i]);
        }
    }
    return answer;
};
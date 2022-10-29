/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let answer = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= answer.at(-1)[1]) {
            answer[answer.length - 1] = [Math.min(intervals[i][0], answer.at(-1)[0]), Math.max(intervals[i][1], answer.at(-1)[1])];
        } else {
            answer.push(intervals[i]);
        }
    }
    return answer;
};
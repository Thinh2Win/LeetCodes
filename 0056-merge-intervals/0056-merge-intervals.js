/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort intervals [s1, e1], [s2, e2]
    // overlap if e1 >= s2 
    // when we merge we take min of s1 and s2
    // and the max of e1 and e2 => [min, max]
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
    let answer = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        let prev = answer.at(-1);
        let curr = intervals[i];
        if (prev[1] >= curr[0]) {
            answer[answer.length - 1] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])]
        } else {
            answer.push(curr);
        }
    }
    return answer;
};
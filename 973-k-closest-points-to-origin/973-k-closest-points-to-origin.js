/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let answer = []; 
    if (points.length === 0) {
        return answer;
    }
    points.forEach(point => {
        let distance = Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
        answer.push([distance, point]);
    });
    answer.sort((a, b) => a[0] - b[0]);
    let sliced = answer.slice(0, k).map(point => point[1]);
    return sliced;
};
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distances = points.map(point => {
        let [x2, y2] = point;
        let distance = (Math.sqrt(((0 - x2)**2 + (0 - y2)**2)));
        point.push(distance);
        return point;
    });
    distances.sort((a, b) => a[2] - b[2]);
    return distances.slice(0, k).map(point => {
        point.pop();
        return point;
    });
};
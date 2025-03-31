/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    
    let e1 = points[0][1];
    let arrows = 1;

    for (let interval of points) {
        let [s2, e2] = interval;
        if (e1 < s2) {
            arrows += 1;
            e1 = e2;
        }
    }
    return arrows;
};
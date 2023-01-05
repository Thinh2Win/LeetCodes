/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
    let balloons = [points[0]];
    points.forEach(balloon => {
        let curr = balloons.at(-1);
        if (curr[1] >= balloon[0]) {
            balloons[balloons.length - 1] = [balloon[0], Math.min(curr[1], balloon[1])];
        } else {
            balloons.push(balloon);
        }
    });
    return balloons.length;
};
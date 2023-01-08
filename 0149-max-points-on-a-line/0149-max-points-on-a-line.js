/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let xMap = {};
    let yMap = {};
    let slopeMax = -Infinity;
    for (let i = 0; i < points.length; i++) {
        let point = points[i]
        let slopeMap = {};
        xMap[point[0]] ? xMap[point[0]] += 1 : xMap[point[0]] = 1;
        yMap[point[1]] ? yMap[point[1]] += 1 : yMap[point[1]] = 1;
        for (let j = 0; j < points.length; j++) {
            if (JSON.stringify(points[j]) === JSON.stringify(points[i])) {
                continue;
            }
            if (points[j][0] !== point[0] && points[j][1] !== point[1]) {
            let slope = (points[j][1] - point[1]) / (points[j][0] - point[0]);
            slopeMap[slope] ? slopeMap[slope] += 1 : slopeMap[slope] = 2;
            }
        }
        slopeMax = Math.max(slopeMax, ...Object.values(slopeMap));
    }
    return Math.max(...Object.values(xMap), ...Object.values(yMap), slopeMax);
};
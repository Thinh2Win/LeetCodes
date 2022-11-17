/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
const findArea = (x1, x2, y1, y2) => {
    return (x2 - x1) * (y2 - y1);
}
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let areaA = findArea(ax1, ax2, ay1, ay2);
    let areaB = findArea(bx1, bx2, by1, by2);
    let leftBound = Math.max(ax1, bx1);
    let rightBound = Math.min(ax2, bx2);
    let upBound = Math.min(ay2, by2);
    let lowBound = Math.max(ay1, by1);

    let overlapArea = 0;
if (leftBound < rightBound && lowBound < upBound) {
    overlapArea = (rightBound - leftBound) * (upBound - lowBound);
}
    return areaA + areaB - overlapArea;
};
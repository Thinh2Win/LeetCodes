/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let L = 0;
    let R = height.length - 1;
    let area = -Infinity;
    while (L < R) {
        if (height[L] < height[R]) {
            area = Math.max(area, height[L] * (R - L));
            L += 1;
        } else {
            area = Math.max(area, height[R] * (R - L));
            R -= 1;
        }
    }
    return area;
};
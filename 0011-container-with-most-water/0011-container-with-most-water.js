/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let L = 0;
    let R = height.length - 1;
    while (L < R) {
        let min = Math.min(height[L], height[R]);
        max = Math.max(max, min * (R - L));
        if (height[L] > height[R]) {
            R -= 1;
        } else {
            L += 1;
        }
    }
    return max;
};
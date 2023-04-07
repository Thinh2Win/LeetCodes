/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let L = 0;
    let R = height.length - 1;
    let leftMax = height[L];
    let rightMax = height[R];
    let trapped = 0;
    while (L < R) {
        if (height[L] > height[R]) {
            R -= 1;
            if (height[R] >= rightMax) {
                rightMax = height[R];
            } else {
                trapped += rightMax - height[R];
            }
        } else {
            L += 1;
            if (height[L] >= leftMax) {
                leftMax = height[L];
            } else {
                trapped += leftMax - height[L];
            }
        }
    }
    return trapped;
};
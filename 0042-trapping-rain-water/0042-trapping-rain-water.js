/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let trappedWater = 0;
    let L = 0; 
    let R = height.length - 1;
    let leftMax = -Infinity; 
    let rightMax = -Infinity;
    while (L < R) {
        leftMax = Math.max(height[L], leftMax);
        rightMax = Math.max(height[R], rightMax);
        if (height[L] < height[R]) {
            L += 1;
        } else {
            R -= 1;
        }
         if (height[L] < leftMax) {
            trappedWater += leftMax - height[L];
        }
         if (height[R] < rightMax) {
            trappedWater += rightMax - height[R];
        }
    }
    return trappedWater;
};
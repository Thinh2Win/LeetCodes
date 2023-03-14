/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 2 pointers 
    // keep track of max height from the left and right 
    // keep track of total trapped water 
    // we move the pointers based on which pointer is greater 
    // as the pointer moves, we 
        // update max if the height is greater 
        // if height is less, we take the difference and add to total 
    let L = 0;
    let R = height.length - 1;
    let leftMax = height[L];
    let rightMax = height[R];
    let total = 0;
    while (L < R) {
        if (leftMax > rightMax) {
            R -= 1;
            if (height[R] < rightMax) {
                total += (rightMax - height[R]);
            }
            rightMax = Math.max(rightMax, height[R]);
        } else {
            L += 1;
            if (height[L] < leftMax) {
                total += (leftMax - height[L]);
            }
            leftMax = Math.max(leftMax, height[L]);
        }
    }
    return total;
};
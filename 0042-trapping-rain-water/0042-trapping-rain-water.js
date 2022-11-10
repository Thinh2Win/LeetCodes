/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let L = 0; 
    let R = height.length - 1;
    let lMax = height[L];
    let rMax = height[R];
    let water = 0;
    while (L < R) {
        if (height[L] > height[R]) {
            water += rMax - height[R];
            R -= 1;
            rMax = Math.max(rMax, height[R]);
        } else {
            water += lMax - height[L];
            L += 1;
            lMax = Math.max(lMax, height[L]);
        }
    }
    return water;
};
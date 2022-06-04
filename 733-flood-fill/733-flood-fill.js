/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc];
    const loop = (image, sr, sc, newColor, oldColor) => {
        
        if (sr >= image.length || sc >= image[0].length || sr < 0 || sc < 0 || image[sr][sc] !== oldColor || image[sr][sc] === newColor) {
            return image;     
        } 
        image[sr][sc] = newColor;             
        
        loop(image, sr, sc + 1, newColor, oldColor);
        loop(image, sr, sc - 1, newColor, oldColor);
        loop(image, sr - 1, sc, newColor, oldColor);
        loop(image, sr + 1, sc, newColor, oldColor);
    }
    loop(image, sr, sc, newColor, oldColor);
    return image;
};
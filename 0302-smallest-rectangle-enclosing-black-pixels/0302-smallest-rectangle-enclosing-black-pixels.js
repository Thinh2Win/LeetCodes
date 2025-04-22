/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {
    /*
        Approach: 
            - iterate and find 4 black squares 
            - so if square is a 1 
            - need to find the 
                - tallest 
                - shortest 
                - leftest 
                - rightest 
            - then the area of the smallest rectangle that encompasses all black squares 
            would be area = (tallest - shortest + 1) * (rightest - leftest + 1)
            ex.1 tallest = 2 shortest = 0 leftest = 1 rightest = 1 
                area = 2 - 0 + 1 * 2 - 1 + 1
                area = 3 * 2 = 6
    */

    let tallest = 0;
    let rightest = 0;
    let shortest = Infinity; 
    let leftest = Infinity;

    for (let row = 0; row < image.length; row++) {
        for (let col = 0; col < image[0].length; col++) {
            if (image[row][col] === '1') {
                tallest = Math.max(tallest, row);
                shortest = Math.min(shortest, row);
                leftest = Math.min(leftest, col);
                rightest = Math.max(rightest, col);
            }
        }
    }
    return (tallest - shortest + 1) * (rightest - leftest + 1)
};
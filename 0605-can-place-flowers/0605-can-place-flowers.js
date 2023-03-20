/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let even = 0;
    let odd = 0;
    flowerbed.forEach((plot, idx) => {
        if (idx % 2 === 0 && plot === 0 && flowerbed[idx - 1] !== 1 && flowerbed[idx + 1] !== 1) {
            even += 1;
        }
        if (idx % 2 === 1 && plot === 0 && flowerbed[idx - 1] !== 1 && flowerbed[idx + 1] !== 1) {
            odd += 1;
        }
    });
    return n <= even || n <= odd ? true : false;
};
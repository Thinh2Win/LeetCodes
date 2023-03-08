/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let min = 1; 
    let max = Math.max(...piles);
    while (min < max) {
        let mp = Math.floor((max - min) / 2) + min;
        if (isPossible(mp, piles, h)) {
            max = mp;
        } else {
            min = mp + 1;
        }
    }
    return min;
};

function isPossible(bph, piles, maxHr) {
    let hrs = maxHr;
    for (let i = 0; i < piles.length; i++) {
        hrs -= Math.ceil(piles[i] / bph);
        if (hrs < 0) {
            return false;
        }
    }
    return true;
}
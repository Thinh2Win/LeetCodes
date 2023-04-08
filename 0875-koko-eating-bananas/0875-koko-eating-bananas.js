/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let min = 1;
    let max = Math.max(...piles);
    while (min < max) {
        let bph = Math.floor((max - min) / 2) + min;
        if (isPossible(bph, piles, h)) {
            max = bph;
        } else {
            min = bph + 1;
        }
    }
    return min;
};

function isPossible(bph, piles, h) {
    let hoursLeft = h;
    for (let i = 0; i < piles.length; i++) {
        let pile = piles[i];
        hoursLeft -= Math.ceil(pile / bph);  
        if (hoursLeft < 0) return false;
    }
    return true;
}
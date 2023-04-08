/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // binary search 
    // need to find our range 
    // need to figure out the conditions to determine which half of our range we can remove 
    // range related to bph (bannas per hour)
    // min = 1 max range = total bannas in the pile 
    // piles = [3,6,7,11] min = 1 max = 27
    // mp = 13 bph 
    // so in order to determine which side of the mp to remove 
    // we need to know if koko eats 13 bph, will that be enough to finish the pile within h hours 
    // since koko can eat each pile in 1 hour, she only used 4 out of 8 hours 
    // since we know she can finish the pile, we can remove the right side of the mp 
    // if she was unable to finish the pile we remove the left 
    // once our binary search finishes, we're left with the minimum bph koko can eat to satisfy the conditions
    let min = 1;
    let max = piles.reduce((a, b) => a + b, 0);
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
    piles.forEach(pile => {
       hoursLeft -= Math.ceil(pile / bph); 
    });
    return hoursLeft >= 0;
}
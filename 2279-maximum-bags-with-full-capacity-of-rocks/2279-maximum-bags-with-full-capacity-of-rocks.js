/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let count = 0;
    let bags = [];
    for (let i = 0; i < capacity.length; i++) {
        bags.push([capacity[i], rocks[i]]);
    }
    let usableBags = bags.filter(bag => {
        return bag[1] !== bag[0];
    });
    count += (bags.length - usableBags.length);
    usableBags.sort((a,b) => (a[0] - a[1]) - (b[0] - b[1]));
    let i = 0;
    while (i < usableBags.length && additionalRocks - (usableBags[i][0] - usableBags[i][1]) >= 0) {
        additionalRocks -= (usableBags[i][0] - usableBags[i][1]);
        count += 1;
        i += 1;
    }
    return count;
};
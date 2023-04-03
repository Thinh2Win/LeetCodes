/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let count = 0;
    let L = 0;
    let R = people.length - 1;
    while (L < R) {
        if (people[L] + people[R] > limit) {
            R -= 1;
            count += 1;
        } else {
            R -= 1; 
            L += 1;
            count += 1;
        }
    }
    return L === R ? count + 1 : count;
};
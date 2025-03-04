/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    if (n === 1) return true;
    // dp/ greedy 
    let powers = {0:1}
    let num = 3;
    let power = 1;
    while (num < n) {
        powers[power] = 3 ** power;
        num = 3**power;
        if (num === n) return true;
        power += 1;
    }
    // find 
    let sums = [1];

    for (let i = 1; i < power; i++) {
        let po3 = powers[i];
        let container = [];
        for (let j = 0; j < sums.length; j++) {
            let currSum = sums[j];
            if (currSum + po3 === n) return true;
            container.push(currSum + po3);
        }
        container.push(po3);
        sums.push(...container);
    }
    return false;
};
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => a - b);
    let count = 0;
    let skipped = 0;
    for (let i = 0; i < satisfaction.length; i++) {
        let curr = 0;
        for (let j = i; j < satisfaction.length; j++) {
            curr += (satisfaction[j] * (j - i + 1));
        }
        if (curr > count) {
            count = curr;
        }
    }
    return count;
};
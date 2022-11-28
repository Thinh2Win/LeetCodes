/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winners = new Set();
    let losers = new Set();
    let losses = {};
    matches.forEach(match => {
       let winner = match[0];
        let loser = match[1];
        losses[loser] ? losses[loser] += 1 : losses[loser] = 1;
        if (!losses[winner]) {
            winners.add(winner);    
        }
        losers.add(loser);
        if (losses[loser] > 1) {
            losers.delete(+loser)
        }
        winners.delete(+loser);
    });
    return [[...winners].sort((a,b) => a - b), [...losers].sort((a,b) => a - b)]
};
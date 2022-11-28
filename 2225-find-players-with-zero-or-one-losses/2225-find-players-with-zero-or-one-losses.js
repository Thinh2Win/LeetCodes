/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winners = new Set();
    let losses = {};
    matches.forEach(match => {
        let winner = match[0];
        let loser = match[1];
        losses[loser] ? losses[loser] += 1 : losses[loser] = 1;
        winners.add(winner)
    });
    let losers = [];
    Object.keys(losses).forEach(loser => {
        winners.delete(+loser);
        if (losses[loser] === 1) {
            losers.push(JSON.parse(loser));
        }
    });
    return [[...winners].sort((a,b) => a - b),losers.sort((a,b) => a - b)];
    
    // iterate through our map, if player has lost 1 time, we push into loser     // array 
};
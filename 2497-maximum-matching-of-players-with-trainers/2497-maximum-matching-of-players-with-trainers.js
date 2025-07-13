/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b) => b - a);
    trainers.sort((a,b) => b - a);
    let matches = 0;
    let t1 = 0;

    for (let player of players) {
        if (player <= trainers[t1]) {
            matches += 1;
            t1 += 1;
        }
        if (t1 >= trainers.length) break
    }
    return matches;
};

var Leaderboard = function() {
    this.board = new MaxPriorityQueue(duple => duple[0]); // [score, player];
    this.tracker = new Set(); // will track players currently in leaderboard
    this.scores = {}; // track player scores player: score 
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    this.scores[playerId] = (this.scores[playerId] || 0) + score;
    if (!this.tracker.has(playerId)) {
        this.tracker.add(playerId);
    } else {
        this.board.remove(duple => duple[1] === playerId);
    }
    this.board.enqueue([this.scores[playerId], playerId]);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let arr = this.board.toArray().slice(0, K);
    return arr.reduce((acc, duple) => acc += duple[0], 0);
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.scores[playerId] = 0;
    if (this.tracker.has(playerId)) {
        this.board.remove(duple => duple[1] === playerId);
    }
    this.board.enqueue([this.scores[playerId], playerId])
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
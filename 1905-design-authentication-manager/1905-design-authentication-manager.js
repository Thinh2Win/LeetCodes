/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
    this.map = new Map();
    this.duration = timeToLive;
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.map.set(tokenId, currentTime + this.duration);
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    let createdAt = this.map.get(tokenId);
    if (!createdAt || currentTime >= createdAt) return;
    this.map.set(tokenId, currentTime + this.duration);
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let tokens = Array.from(this.map);
    return tokens.filter(token => token[1] > currentTime).length;
};

/** 
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
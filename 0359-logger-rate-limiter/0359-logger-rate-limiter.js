
var Logger = function() {
    this.map = {}; // string : time
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    // if message isnt in this.map we can set the string with timeStamp + 10 
    // and return true 
    if (this.map[message] === undefined || timestamp >= this.map[message]) {
        this.map[message] = timestamp + 10;
        return true;
    } 
    return false;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
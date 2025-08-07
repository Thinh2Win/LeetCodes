/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.total = 0;
    this.max = size;
    this.window = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.total += val;
    this.window.push(val);
    if (this.window.length > this.max) {
        this.total -= this.window.shift();
    }
    return this.total / this.window.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
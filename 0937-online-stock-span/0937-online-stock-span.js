
var StockSpanner = function() {
    this.days = [];
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    if (this.days.length === 0) {
        this.stack.push(price);
        this.days.push(1);
        return 1;
    }
    let totalDays = 1;
    while (this.stack.length && price >= this.stack.at(-1)) {
        let days = this.days.pop();
        this.stack.pop();
        totalDays += days;
    }
    this.stack.push(price);
    this.days.push(totalDays);
    return totalDays;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var StockSpanner = function() {
    this.container = [],
    this.map = {}
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
        this.container.push(price);
        let counter = 1;
        if (this.container.length === 1) {
            this.map[0] = 1;
        } 
        let idx = this.container.length - 2;
        let currentNum = this.container.at(-1);
        while (idx >= 0 && this.container[idx] <= currentNum) {
            counter += this.map[idx];
            idx -= this.map[idx];
        }
        this.map[this.container.length - 1] = counter;
        return counter;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
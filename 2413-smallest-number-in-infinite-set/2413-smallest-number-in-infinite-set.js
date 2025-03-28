
var SmallestInfiniteSet = function() {
    // keep track of what we removed 
    this.minQ = new MinPriorityQueue();
    // keep track of current smallest 
    this.smallest = 1;
    // if we pop smallest we add to set and increment 
    // need a set to avoid double adding values into our minQ
    this.set = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let front = this.minQ.front();
    if (front && front < this.smallest) {
        let popped = this.minQ.dequeue()
        this.set.delete(popped);
        return popped;
    }
    let val = this.smallest; 
    this.smallest += 1;
    return val;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.smallest && !this.set.has(num)) {
        this.minQ.enqueue(num);
        this.set.add(num);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

var RandomizedSet = function() {
    this.map = {},
    this.set = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] !== undefined) {
        return false;
    } else {
        this.set.push(val);
        this.map[val] = this.set.length - 1;
        return true;
    }  
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] !== undefined) {
        let idx = this.map[val];
        let last = this.set.at(-1);
        [this.set[idx], this.set[this.set.length - 1]] = [this.set[this.set.length - 1], this.set[idx]];
        this.map[last] = idx;
        this.set.pop();
        delete this.map[val];
        return true;
    } else {
        return false;
    }

};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.set[Math.floor(Math.random() * this.set.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
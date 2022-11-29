
var RandomizedSet = function() {
    this.map = {}
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] !== undefined) {
        return false;
    } else {
        this.map[val] = 1;
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
    let set = Object.keys(this.map);
    let range = set.length;
    return set[Math.floor(Math.random() * range)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
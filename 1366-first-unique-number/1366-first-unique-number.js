/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    // map to track freq of numbers 
    // stack to track most recent numbers
    this.map = {};
    this.stack = [];

    nums.forEach(num => this.add(num));
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    // while the top of the stack is not unique 
    // we pop from stack 
    // if stack is empty we return -1 else, return top of stack 
    while (this.map[this.stack.at(-1)] >= 2) {
        this.stack.pop();
    }
    return this.stack.length ? this.stack.at(-1) : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    // push value into stack 
    // add to map freq 
    this.map[value] = (this.map[value] || 0) + 1;
    if (this.map[value] < 2) this.stack.unshift(value);
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
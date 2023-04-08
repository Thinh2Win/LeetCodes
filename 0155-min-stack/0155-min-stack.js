class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

var MinStack = function() {
    this.min = null;
    this.first = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.first) {
        this.first = new Node(val);
    } else {
        let holder = this.first;
        this.first = new Node(val);
        this.first.next = holder;
    }
    if (!this.min) {
        this.min = new Node(val);
    } else if (this.min.value >= val) {
        let holder = this.min;
        this.min= new Node(val);
        this.min.next = holder;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let firstValue = this.first.value;
    if (this.min.value === firstValue) {
        this.min = this.min.next;
    }
    this.first = this.first.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.first.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.value ? this.min.value : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
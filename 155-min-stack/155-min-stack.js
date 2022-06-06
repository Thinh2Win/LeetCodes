class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var MinStack = function() {
    this.first = null;
    this.min = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.min) {
        this.min = new Node(val);
    } else {
        if (this.min.value >= val) {
            let holder = this.min; 
            this.min = new Node(val);
            this.min.next = holder; 
        }
    }
    if (!this.first) {
        this.first = new Node(val);
    } else {
        let holder = this.first;
        this.first = new Node(val);
        this.first.next = holder;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.first.value;
    if (popped === this.min.value) {
        let holder = this.min.next;
        this.min = holder;
    }
    let nextTop = this.first.next;
    this.first = nextTop;
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
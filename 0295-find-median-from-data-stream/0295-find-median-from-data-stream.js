
var MedianFinder = function() {
    this.arr = [],
    this.min = 0,
    this.max = -Infinity
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let mp = Math.floor(this.arr.length / 2);
    if (this.arr.length < 3) {
        this.arr.push(num);
        this.arr.sort((a, b) => a - b);
        this.max = this.arr.length - 1;
    } else if (num >= this.arr[this.max]) {
        this.arr.push(num);
        this.max += 1;
    } else if (num <= this.arr[this.min]) {
        this.arr.unshift(num);
        this.max += 1;
    } else if (num > this.arr[this.min] && num <= this.arr[mp]) {
       for (let i = this.min; i < mp; i++) {
           if (this.arr[i + 1] >= num) {
               this.arr.splice(i + 1, 0, num);
               break;
           }
       }
        this.max += 1;
    } else if (num < this.arr[this.max] && num >= this.arr[mp]) {
        for (let j = this.max; j > mp; j--) {
            if (this.arr[j - 1] <= num) {
                this.arr.splice(j, 0, num);
                break;
            }
        }
        this.max += 1;
    }
    return this.arr;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let mp = Math.floor(this.arr.length / 2);
    if (this.arr.length % 2 === 0) {
        return (this.arr[mp] + this.arr[mp - 1]) / 2
    } else {
        return this.arr[mp];
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
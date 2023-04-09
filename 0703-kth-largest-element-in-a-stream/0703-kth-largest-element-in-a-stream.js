/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => a - b);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let L = 0;
    let R = this.nums.length;
    while (L < R) {
        let mp = Math.floor((R - L) / 2) + L;
        let point = this.nums[mp];
        if (point < val) {
            L = mp + 1;
        } else {
            R = mp;
        }
    }
    this.nums = [...this.nums.slice(0, L), val, ...this.nums.slice(L)];
    return this.nums.at(-this.k);
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
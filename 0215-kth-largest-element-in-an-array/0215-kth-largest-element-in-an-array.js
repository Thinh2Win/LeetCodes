/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const maxQ = new MaxPriorityQueue();
    for (let num of nums) maxQ.enqueue(num);
    for (let i = 1; i < k; i++) maxQ.dequeue();
    return maxQ.front();
};
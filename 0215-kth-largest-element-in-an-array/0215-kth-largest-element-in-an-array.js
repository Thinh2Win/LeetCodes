/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
      let pq = new MinPriorityQueue();

    for (let x of nums) {
        pq.enqueue(x);
        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    return pq.front().element;
};
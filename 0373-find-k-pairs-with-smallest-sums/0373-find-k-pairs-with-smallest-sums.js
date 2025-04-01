/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let pairs = [];
    const minQ = new MinPriorityQueue(arr => arr[0]); // [sum, idx]

    for (let i = 0; i < nums1.length; i++) {
        let num1 = nums1[i];
        let num2 = nums2[0];
        minQ.enqueue([num1 + num2, i, 0])
    }
    const n = nums2.length;
    while (k > 0 && minQ.size()) {
        const [sum, idx1, idx2] = minQ.dequeue();

        pairs.push([nums1[idx1], nums2[idx2]]);

        if (pairs.length === k) return pairs;

        if (idx2 < n - 1) minQ.enqueue([nums1[idx1] + nums2[idx2 + 1], idx1, idx2 + 1]);
    }
    return pairs;
};
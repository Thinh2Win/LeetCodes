/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let result = 0;
    let totalSum = 0;
    const minQ = new MinPriorityQueue();
    let merged = nums1.map((num, idx) => [nums2[idx], num]);
    merged.sort((a, b) => b[0] - a[0])
    for (let [max2, num1Val] of merged) {
        if (minQ.size() === k) {
            totalSum -= minQ.dequeue().element;
        }
        
        totalSum += num1Val;
        minQ.enqueue(num1Val);
        
        if (minQ.size() === k) {
            result = Math.max(result, totalSum * max2);
        }
    }
 return result;
};
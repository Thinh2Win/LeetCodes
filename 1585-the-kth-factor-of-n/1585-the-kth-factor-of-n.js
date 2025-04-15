/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    /*
        minQ to track factors 
        find all factors of n 
        if queue size < k return - 1
        else pop from queue k times 
    */
    const minQ = new MinPriorityQueue();
    let factors = new Set();
    let end = Math.ceil(n / 2);
    for (let i = 1; i <= end; i++) {
        if (n % i === 0) {
            let quotient = n / i;
            if (!factors.has(quotient)) minQ.enqueue(quotient);
            factors.add(quotient);
            if (!factors.has(i)) minQ.enqueue(i);
            factors.add(i);
        }
    }
    if (minQ.size() < k) return -1;
    for (let j = 1; j < k; j++) {
        minQ.dequeue();
    } 
    return minQ.dequeue();
};
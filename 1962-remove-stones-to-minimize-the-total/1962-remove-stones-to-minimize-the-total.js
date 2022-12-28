/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let pq = new MaxPriorityQueue({priority: x => x});
    piles.forEach(num => pq.enqueue(num));
    while (k > 0) {
        let target = Math.ceil(pq.dequeue().element / 2);
        pq.enqueue(target);
        k -= 1;
    }
    let total = 0;
    let arr = pq.toArray();
    arr.forEach(e => total += e.element);
    return total;
};
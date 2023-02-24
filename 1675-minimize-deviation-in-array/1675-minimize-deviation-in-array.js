/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function(nums) {
    let mpq = new MaxPriorityQueue();
    nums.forEach(num => {
        num % 2 === 0 ? mpq.enqueue(num) : mpq.enqueue(num * 2);
    });
    let deviation = mpq.front().element - mpq.back().element;
    while (mpq.front().element % 2 === 0) {
        let {element} = mpq.dequeue();
        mpq.enqueue(element / 2);
        deviation = Math.min(deviation, mpq.front().element - mpq.back().element);
    }
    return deviation;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    /*
        Facts: 
            - nums array is all positive 
            - alternating array is if 
                1. the value 2 indexes before i must be = nums[i] 
                2. the value 1 index before i must NOT BE = nums[i]
            ex. [2, 1, 2, 3, 2, 0, 2] is valid 
            - can do unlimited amount of operations where we can change the number at an index to any 
            positive number

        Input: nums array of positive integers 
        Output: number of operations needed to turn nums array into an alternating array   

        [1,1,3,1,5,6,1,3]

        - essentially all even indexes must be the same number 
            - find the most frequent number at even indexes
            - change all indexes to that number
        - for odd indexes 
            - if the number at odd idx = most freq number 
            - change the num at odd idx 
        - total operations would = operations needed to change even indexes + number changes for odd indxes
        - 1 problem is if most frequency number at odd indexes is also the same as even 
            in which case we would be using more operations than necessary 
        - so instead we should track frequncy for both odd and even indexes in a max priority queue 
        - that way if we have the same number we check which is more frequent and use that index 
    */
    if (nums.length <= 1) return 0;
    let evenMaxQ = new MaxPriorityQueue(duple => duple[1]); // [number, frequency]
    let oddMaxQ = new MaxPriorityQueue(duple => duple[1]);

    let evenMap = {};
    let oddMap = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (i % 2 === 0) {
            evenMap[num] = (evenMap[num] || 0) + 1;
        } else {
            oddMap[num] = (oddMap[num] || 0) + 1;
        }
    }

    for (let num in evenMap) {
        let count = evenMap[num];
        evenMaxQ.enqueue([num, count]);
    }

    for (let num in oddMap) {
        let count = oddMap[num];
        oddMaxQ.enqueue([num, count]);
    }

    const evenCount = Math.ceil(nums.length / 2);
    const oddCount  = Math.floor(nums.length / 2);

    let [[e1, c1], [e2, c2]] = [evenMaxQ.dequeue(), evenMaxQ.dequeue() || [-1, 0]];
    let [[o1, d1], [o2, d2]] = [oddMaxQ.dequeue(), oddMaxQ.dequeue() || [-1, 0]];
    
    if (e1 !== o1) {
    // we can use the most frequent on both parities
    return (evenCount - c1) + (oddCount - d1);
    } else {
        // must pick one of the two alternatives
        const useEven1 = (evenCount - c1) + (oddCount  - d2); // (e1, o2)
        const useOdd1  = (evenCount - c2) + (oddCount  - d1); // (e2, o1)
        return Math.min(useEven1, useOdd1);
    }
};
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    /*
        Facts: 
            - given nums array and a limit 
            - need to find longest non empty subarray where absolute diff 
            of any 2 numbers in the subarray is less than limit 
        Approach: 
            - sliding window 
            - keep track of the min and max numbers within the window 
            - if the difference is > limit then we need to shrink our window until 
            it isnt 
            - track min and max using heap 
        nums = [1, 5, -6, -2, 10] limit = 5

    */
    let maxQ = new MaxPriorityQueue();
    let minQ = new MinPriorityQueue();
    let answer = 0;
    let L = 0;
    let freq = {};

    for (let R = 0; R < nums.length; R++) {
        let num = nums[R];
        freq[num] = (freq[num] || 0) + 1;
        maxQ.enqueue(num);
        minQ.enqueue(num);

        while (Math.abs(maxQ.front() - minQ.front()) > limit) {
            console.log(maxQ.front(), minQ.front())
            let numL = nums[L];
            freq[numL] -= 1;
            while (freq[maxQ.front()] === 0) maxQ.dequeue();
            while (freq[minQ.front()] === 0) minQ.dequeue();
            L += 1;
        }
        answer = Math.max(answer, R - L + 1);
    }
    return answer;
};
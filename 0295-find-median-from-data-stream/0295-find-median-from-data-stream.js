
/* 
    by using a min and max heap we can effectively track the mp of the nums array 
    ex. say we have [1, 2, 3, 4, 5, 6]
    [1, 2, 3] [4, 5, 6] -> the mp is the max of the max heap (left )and the min of the min heap (right)
    [1, 2] [3, 4, 5] -> with odd length, mp depends on which heap is greater, 
    if min heap greater length, then mp is min else max heap is greater length so mp is max 

    so essentially, we don't have to worry about sorting the array as numbers stream in
    we just need to keep track of the max from max heap and min from min heap 
    but to do this we need to split the numbers evenly between the two as they stream in 
    if nums came in as [2, 6, 3, 4, 1, 5]

    then step by step we'd have 
    1) insert 2
        maxHeap: [2]
        minHeap: []  
    2) insert 6
        maxHeap: [6, 2]
        minHeap: []

        since length of max is 2 more than min we transfer top of max to min 
        maxHeap: [2]
        minHeap: [6]

    3) insert 3
    maxHeap: [3, 2]
    minHeap: [6] 

    4) insert 4
    maxHeap: [4, 3, 2]
    minHeap: [6]  
    rearrange
    maxHeap: [3, 2]
    minHeap: [4, 6]  

    5) insert 1
    maxHeap: [3, 2, 1]
    minHeap: [4, 6]  

    6) insert 5
    maxHeap: [5, 3, 2, 1]
    minHeap: [4, 6]  
    rearrange
    maxHeap: [3, 2, 1]
    minHeap: [4, 6, 5]  
    
    so now we have our max pointing to 3 and min pointing to 4 which are our 2 mps 
*/
var MedianFinder = function() {
    this.maxQ = new MaxPriorityQueue();
    this.minQ = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxQ.enqueue(num);

    if (this.maxQ.front() > this.minQ.front()) {
        this.minQ.enqueue(this.maxQ.dequeue())
    }

    if (this.maxQ.size() - this.minQ.size() >= 2) {
        // rearrange
        this.minQ.enqueue(this.maxQ.dequeue());
    } else if (this.minQ.size() - this.maxQ.size() >= 2) {
        this.maxQ.enqueue(this.minQ.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let minLength = this.minQ.size();
    let maxLength = this.maxQ.size();
    if (maxLength > minLength) {
        return this.maxQ.front();
    } else if (minLength > maxLength) {
        return this.minQ.front();
    } else {
        // even length array return average of min and max q 
        let num1 = this.minQ.front();
        let num2 = this.maxQ.front();
        return ((num1 + num2) / 2);
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
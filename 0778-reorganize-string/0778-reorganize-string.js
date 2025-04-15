/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    /*
        maxheap to track frequencies of a char 
        pop from our maxHeap and use char to create a string
        decrement freq of char and add back into the heap 
        this ensures that we're always using the most freq letters to build our string 
        if our heap only has 1 char left, check if the freq is > half the curr string length 
        if so it is not possible to build a valid string
    */
    const freq = {};
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    let maxQ = new MaxPriorityQueue(duple => duple[1]); // ['a', 3]
    for (let char in freq) {
        let count = freq[char];
        maxQ.enqueue([char, count]);
    }
    let answer = [];
    while (maxQ.size() > 1) {
        let char1 = maxQ.dequeue();
        let char2 = maxQ.dequeue();
        answer.push(char1[0]);
        answer.push(char2[0]);
        char1[1] -= 1;
        char2[1] -= 1;
        char1[1] > 0 && maxQ.enqueue(char1);
        char2[1] > 0 && maxQ.enqueue(char2);
    }
    if (maxQ.size() === 0) return answer.join('');
    let [char, count] = maxQ.dequeue();
    if (count > 1) return "";
    answer.push(char);
    return answer.join('');
};
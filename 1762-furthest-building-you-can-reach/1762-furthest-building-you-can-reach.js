/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    /*
        we want to use our ladders for the biggest height differences 
        loop through and track height diffs using maxQ 
        ex. heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
        originally start by using bricks 
        4 -> 12 uses 8 bricks, put 8 in max queue , bricks = 2 ladders = 2
        12 -> 2 can jump 
        2 -> 7 need 5 bricks but we only have 2 left
            so we pop from our queue and add to our bricks then use a ladder 
        2 -> 7 bricks = 10 ladders = 1
            if there is no ladder we have reached our max distance 
        7 -> 3 can jump
        3 -> 18 need 15 bricks, queue is empty, use a ladder, bricks = 10, ladders = 0
        18 -> 20 use 2 bricks, bricks = 8, ladders = 0
        20 -> 3 can jump
        3 -> 19 not enough bricks or ladders 
    */
    const maxQ = new MaxPriorityQueue();
    let i = 0;
    for (i; i < heights.length - 1; i++) {
        if (heights[i] >= heights[i + 1]) continue;
        let diff = heights[i + 1] - heights[i];
        bricks -= diff;
        maxQ.enqueue(diff);
        if (bricks < 0) {
            bricks += maxQ.dequeue();
            ladders -= 1;
        }
        if (ladders < 0) break;
    }
    return i;
};
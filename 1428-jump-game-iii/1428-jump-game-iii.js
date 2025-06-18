/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    /*
        BFS 
        - create visited array to track visited idxs 
        - queue with start point 
        - pop from queue to get idx
            - if arr[idx] = 0 return true 
            - mark idx as visited 
            - check idx + arr[idx] and idx - arr[idx] within bounds 
            - and if we haven't visited the idx we can push to queue 
        - can return -1 after loop 
    */

    const visited = new Array(arr.length).fill(false);
    const queue = [start];

    while (queue.length) {
        let idx = queue.pop();
        if (arr[idx] === 0) return true;
        visited[idx] = true;
        let left = idx - arr[idx];
        let right = idx + arr[idx];

        if (left >= 0 && !visited[left]) queue.push(left);
        if (right < arr.length && !visited[right]) queue.push(right);
    }
    return false;
};
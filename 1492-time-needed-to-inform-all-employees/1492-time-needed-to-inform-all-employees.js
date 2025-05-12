/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, managers, informTime) {
    /*
        create an adjList where idx is the manager and the value is an array of subordinates
        BFS with queue starting with headID 
        pop from queue and check subordinates 
        if there are subordinates we add informTime of manager to total time 
        then push subordinates into the queue 
        need to make sure to only add to total time once per manager and not per subordinates
        and only add to the time if the manager has subordinates
    */

    let totalTime = 0;
    const adjList = Array.from({length: n}, () => []);
    managers.forEach((man, sub) => {
        man >= 0 && adjList[man].push(sub);
    });

    const queue = [[headID, 0]];

    while (queue.length) {
        let [manager, currTime] = queue.shift();
        totalTime = Math.max(totalTime, currTime);
        let time = informTime[manager];
        let subordinates = adjList[manager];
        subordinates.forEach(sub => queue.push([sub, currTime + time]));
    }
    return totalTime;
};
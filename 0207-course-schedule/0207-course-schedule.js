/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    /*
        Kahns algo
        - array to track pre reqs and the courses that rely on it
        - adj list 
        - queue 
        - fill adj list and pre reqs array 
        - start queue with courses that dont need pre reqs 
        - pop from queue, use adj list to see courses that need the pre req
        - decrement associated course with curr pre req from pre req array 
        - if course becomes 0, theres no more pre reqs needed, add course to queue 
        - by the end if course array is all 0, we know its possible
    */

    const preReqs = new Array(numCourses).fill(0);
    const adjList = Array.from({length: numCourses}, () => []);
    const queue = [];

    for (let [course, preReq] of prerequisites) {
        adjList[preReq].push(course);
        preReqs[course] += 1;
    }
    for (let course = 0; course < preReqs.length; course++) {
        if (preReqs[course] === 0) queue.push(course);
    }

    while (queue.length) {
        let preReq = queue.pop();
        let courses = adjList[preReq];

        for (let course of courses) {
            preReqs[course] -= 1;
            if (preReqs[course] === 0) queue.push(course);
        }
    }
    return !preReqs.some(num => num > 0);
};
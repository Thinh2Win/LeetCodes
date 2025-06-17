/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const n = numCourses;
    const preReqs = new Array(n).fill(0);
    const adjList = Array.from({length: n}, () => []);
    for (let [course, preReq] of prerequisites) {
        adjList[preReq].push(course);
        preReqs[course] += 1;
    }

    const queue = [];
    for (let i = 0; i < preReqs.length; i++) {
        // i = course
        if (preReqs[i] === 0) queue.push(i);
    }

    const answer = [];

    while (queue.length) {
        let preReq = queue.pop();
        answer.push(preReq);
        let courses = adjList[preReq];
        for (let course of courses) {
            preReqs[course] -= 1;
            if (preReqs[course] === 0) queue.push(course);
        }
    }
    return preReqs.some(preReq => preReq > 0) ? [] : answer;
};
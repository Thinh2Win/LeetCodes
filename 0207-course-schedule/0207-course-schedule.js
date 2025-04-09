/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    /*
        kahns algo
        keep track of the number of courses that depend on the preReq 
        ex. [[2,0], [1,0], [3,0]]
        there are 3 courses dependent on course 0 
        [3, 0, 0, 0] <- idx correlates with course number, value = dependent courses 
        for each course that is a 0, we can add to a queue 
        we pop the course from the queue and check which course was a pre req for the current 
        decrement the prereq from the array 
        if any values reach 0 we push into the queue 
        ex. courses 1, 2, 3 would be in the queue 
        0 was a prereq for course 1 so we decrement course 0 
        [2, 0, 0, 0]
        do the same for the others 
        [0, 0, 0, 0]
        if by the end our queue is empty and all the values are 0 we know we can complete the courses 
        ex. when we cant [[2,0], [1,0], [3,0], [0,2]]
        [3, 0, 1, 0]
        queue has course 1 and 3
        0 is a prereq of both so we decrement 
        [1, 0, 1, 0]
        queue is empty with no new values and our array still contains values other than 0 so we know theres a
        loop 
    */

    const adjList = Array.from({length: numCourses}, () => []);
    const dependants = new Array(numCourses).fill(0);

    for (let [c1, c2] of prerequisites) {
        adjList[c1].push(c2); // create relationship of courses that rely on curr course
        dependants[c2] += 1;
    }

    let queue = [];
    for (let course = 0; course < dependants.length; course++) {
        if (dependants[course] === 0) queue.push(course);
    };
    
    while (queue.length) {
        let course = queue.pop();
        let prereqs = adjList[course];
        for (let prereq of prereqs) {
            dependants[prereq] -= 1;
            if (dependants[prereq] === 0) queue.push(prereq);
        }
    }
    return dependants.every(num => num === 0);
};
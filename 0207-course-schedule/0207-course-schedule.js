/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
   // kahns algo to detect cycles 
   // need an adjecency list 
   // need an inDegree array where the course matches the arrays index and the value is a number that keeps track of the pre reqs are needed to complete that course 
   // prerequisites = [[1,0], [0, 2], [2, 3], [0, 3]]
   // for example course 0 needing course 2 and 3 would show [2, 1, 1, 0]
   // courses that require 0 pre reqs are placed in a queue
   // utilizing our adj list we can work backwards and decrement courses that need course 3 
   // any courses with 0 in degree will be added to the queue
   // keep count every time we remove a course from the queue 
   // if the count === numCourses we know we can complete all the courses


    let adjList = new Array(numCourses).fill(0).map(zero => []);
    let inDegree = new Array(numCourses).fill(0);
    prerequisites.forEach(pair => {
        let [course, prereq] = pair;
        adjList[prereq].push(course);
        inDegree[course] += 1;
    });

    let queue = [];
    inDegree.forEach((count, idx) => {
        if (count === 0) queue.push(idx);
    });

    let count = 0;
    while (queue.length) {
        let course = queue.shift();
        count += 1;

        let neighbors = adjList[course];
        neighbors.forEach(neighbor => {
            inDegree[neighbor] -= 1;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        });
    }
    return count === numCourses;
};


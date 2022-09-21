/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adjList = [];
    for (let i = 0; i < numCourses; i++) {
        adjList.push([]);
    }
    prerequisites.forEach(preReq => {
        adjList[preReq[0]].push(preReq[1]);
    });
    
    let visited = new Array(numCourses).fill(0);
    let hasCycle = false; 
    const DFS = (currentNode) => {
        if (visited[currentNode] === 1) {
            hasCycle = true;
            return; 
        }
        if (visited[currentNode] === 2) {
            return;
        }
        visited[currentNode] = 1; 
        adjList[currentNode].forEach(edge => {
            DFS(edge);
        });
        visited[currentNode] = 2;
    }
    for (let j = 0; j < adjList.length; j++) {
        DFS(j);
    }
    return hasCycle ? false : true;
};
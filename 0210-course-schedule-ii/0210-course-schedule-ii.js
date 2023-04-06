/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let adjList = new Array(numCourses).fill(0).map(zero => []);
    for (let i = 0; i < prerequisites.length; i++) {
        let [c1, c2] = prerequisites[i];
        adjList[c1].push(c2);
    };
    let foundLoop = false;
    let stack = [];
    let visited = new Array(numCourses).fill(0);
    const DFS = (idx) => {
        if (foundLoop || visited[idx] === 2) return;
        if (visited[idx] === 1) {
            foundLoop = true;
            return;
        }
        visited[idx] = 1;
        for (let k = 0; k < adjList[idx].length; k++) {
            if (visited[adjList[idx][k]] === 2) continue;
            DFS(adjList[idx][k]);
        }
        visited[idx] = 2;
        stack.push(idx);
        return;
    };
    for (let j = 0; j < adjList.length; j++) {
        if (visited[j] === 2) continue;
        DFS(j);
    }
    return foundLoop ? [] : stack;
};
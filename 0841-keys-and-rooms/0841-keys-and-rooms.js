/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let visited = new Array(rooms.length).fill(0);
    visited[0] = 1;
    const DFS = (key) => {
       if (visited[key] === 1) return;
        visited[key] = 1;
        rooms[key].forEach(room => {
            DFS(room);
        });
    }
    rooms[0].forEach(key => {
        DFS(key);
    });
    return visited.every(room => room === 1) ? true : false;
};
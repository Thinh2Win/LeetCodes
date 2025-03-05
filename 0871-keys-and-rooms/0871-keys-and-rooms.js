/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // BFS 
    // create a queue to hold keys 
    let keys = [...rooms[0]];
    // create a dp array and mark the room idx as true if we have access 
    let visited = new Array(rooms.length).fill(false);
    visited[0] = true;
    // starting from first room we mark dp array index 0 as true 
    while(keys.length) {
    // push the keys from first room into queue (if the dp array shows true we don't need to push keys from that room again)
        let key = keys.pop();
        if (!visited[key]) {
            visited[key] = true;
            keys.push(...rooms[key])
        }
    }
    // repeat steps until we have opened all the doors possible and our queue is empty 
    // check if there are any false values in the array   
    if (visited.some(room => room === false)) return false;
    return true;
};
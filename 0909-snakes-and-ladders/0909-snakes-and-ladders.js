/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
      let path = [];
    let alt = 0;
    for (let i = board.length - 1; i >= 0; i--) {
        if (alt % 2 === 1) {
            let copy = board[i].reverse();
            path.push(...copy);
        } else {
            path.push(board[i]);
        }
        alt += 1;
    }
    let route = path.flat();
    let visited = {};
    let min = Infinity;
    const DFS = (idx, count) => {
        if (idx + 6 >= route.length - 1) {
            if (idx === route.length - 1) {
                min = Math.min(count, min);
            } else {
                min = Math.min(count + 1, min);   
            }
            return;
        }
        if (visited[idx] !== undefined && count >= visited[idx]) {
            return;
        }
        visited[idx] = count;
        for (let j = 1; j <= 6; j++) {
            if (idx + j < route.length) {
                if (route[idx + j] !== -1) {
                    DFS(route[idx + j] - 1, count + 1);    
                } else {
                    DFS(idx + j, count + 1);
                }
            }
        }
    }
    DFS(0, 0);
    return min === Infinity ? -1 : min; 
};
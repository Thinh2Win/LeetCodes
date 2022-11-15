/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let list = new Array(stones.length).fill(0).map(zero => []);
    for (let i = 0; i < stones.length; i++) {
        let current = stones[i];
        for (let j = 0; j < stones.length; j++) {
            if (stones[j] === stones[i]) continue;
            let row = stones[j][0];
            let col = stones[j][1];
            if (current[0] === row || current[1] === col) {
                list[i].push(j); 
            }
        }
    }
    let seen = {};
    let dp = new Array(list.length).fill(0);
    const DFS = (idx, depth) => {
        for (let j = 0; j < list[idx].length; j++) {
            if (seen[list[idx][j]]) continue;
            seen[list[idx][j]] = true;
            depth = DFS(list[idx][j], depth + 1);
        }
        return depth;
    }

    for (let i = 0; i < list.length; i++) {
        if (seen[i]) continue;
        seen[i] = true;
        dp[i] += DFS(i, 0);   
    }
    let sum = 0; 
    dp.forEach(num => sum += num);
    return sum;
};
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    while (stones.length >= 2) {
        let s1 = stones.pop();
        let s2 = stones.pop();
        let newStone = s1 - s2;
        let idx = findIdx(stones, newStone);
        if (stones[idx] < newStone) {
            stones = [...stones.slice(0, idx + 1), newStone, ...stones.slice(idx + 1)];
        } else {
            stones = [...stones.slice(0, idx), newStone, ...stones.slice(idx)];
        }
    }
    return stones[0];
};

function findIdx(stones, target) {
    let L = 0;
    let R = stones.length - 1;
    while (L < R) {
        let mp = Math.floor((R - L) / 2) + L;
        if (stones[mp] < target) {
            L = mp + 1;
        } else {
            R = mp;
        }
    }
    return L;
}
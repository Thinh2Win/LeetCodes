/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let map = {};
    let count = {};
    for (let [x, y] of dominoes) {
        let pair1 = `${x},${y}`;
        let pair2 = `${y},${x}`;
        if (map[pair1] === undefined && map[pair2] === undefined) {
            map[pair1] = 0;
            count[pair1] = 0;
        } else if (pair1 === pair2) {
            map[pair1] += 1
            count[pair1] += map[pair1]
        } else if (map[pair1] !== undefined) {
            map[pair1] += 1
            count[pair1] += map[pair1]
        } else if (map[pair2] !== undefined) {
            map[pair2] += 1
            count[pair2] += map[pair2]
        }
    }
    return Object.values(count).reduce((acc, num) => acc += num, 0);
};
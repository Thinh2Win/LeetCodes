/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let set = new Set();
    const DFS = (currentSum, container) => {
        if (currentSum < 0) {
            return;
        }
        if (currentSum === 0) {
            let copy = container.map(item => item);
            copy.sort((a, b) => a - b);
            set.add(JSON.stringify(copy));
            return;
        }
        candidates.forEach(candidate => {
                container.push(candidate);
                DFS(currentSum - candidate, container);
                container.pop();
        });
    };
    DFS(target, [])
    let answer = [...set].map(item => {
    return JSON.parse(item);
    });
    return answer;
};
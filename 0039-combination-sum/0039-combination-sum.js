/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    const DFS = (idx, diff, container) => {
        if (diff === 0) {
            result.push(container.slice());
            return;
        }
        if (diff < 0 || idx === candidates.length) {
            return;
        }
        DFS(idx + 1, diff, container);
        container.push(candidates[idx]);
        DFS(idx, diff - candidates[idx], container);
        container.pop();
    }
    DFS(0, target, []);
    return result;
};
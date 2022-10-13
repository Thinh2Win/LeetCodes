/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let target = 0;
    nums.forEach(num => target += num);
    if (target % 2 === 1) return false; 
    target /= 2;
    let memo = new Map();
    let foundTarget = false;
    const DFS = (array, sum, idx) => {
        if (sum === 0) {
            foundTarget = true;
            return;
        }
        if (foundTarget || idx === array.length - 1) {
            return;
        }
        if (memo.has(`${sum},${idx}`) || sum < 0) {
            return;
        }
        
        DFS(array, sum - array[idx], idx + 1);
        DFS(array, sum, idx + 1) ;
        memo.set(`${sum},${idx}`, true);
    }
    DFS(nums, target, 0);
    return foundTarget;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let answer = [];
    const recurse = (container, remaining) => {
        if (remaining.length === 0) {
            answer.push(container);
        }
        for (let i = 0; i < remaining.length; i++) {
            recurse([...container, remaining[i]], remaining.filter(num => num !== remaining[i]));
        }
    };
    recurse([], nums);
    return answer;
};
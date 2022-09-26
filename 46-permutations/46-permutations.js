/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let answer = [];
    const loop = (permutations, currentArray) => {
        if (permutations.length === nums.length) {
            answer.push(permutations.slice(0));
            return;
        }
        for (let i = 0; i < currentArray.length; i++) {
            permutations.push(currentArray[i]);
            loop(permutations, currentArray.filter(num => num !== currentArray[i]));
            permutations.pop();
        }
        
    }
    loop([], nums)
    return answer;
};
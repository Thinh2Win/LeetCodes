/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b)
    let answer = new Set();
    answer.add('[]');
    nums.forEach(num => {
       [...answer].forEach(set => {
           let power = JSON.parse(set);
           power.push(num);
           answer.add(JSON.stringify(power));
       });
    });
    return [...answer].map(set => JSON.parse(set));
};
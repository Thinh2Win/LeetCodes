/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let answer = [[]];
    nums.forEach(num => {
       answer.forEach(set => {
           let copy = set.slice();
           copy.push(num);
           answer.push(copy);
       }); 
    });
    return answer;
};
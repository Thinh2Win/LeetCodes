/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let answer = new Set();
    answer.add([]);
    nums.forEach(num => {
        let values = [...answer];
        values.forEach(val => {
            let copy = val.slice();
            copy.push(num);
            answer.add(copy);
        });
    });
    return [...answer];
};
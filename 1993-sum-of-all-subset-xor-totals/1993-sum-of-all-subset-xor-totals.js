/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    // find all subsets 
    // get the xor of subsets 
        // if subset length is <= 1 we can just add that num 
        // else we xor all values together
    const subsets = getSubsets(nums);
    let answer = 0;
    for (let set of subsets) {
        if (set.length <= 1) {
            answer += set[0];
            continue;
        };
        answer += set.reduce((num, acc) => acc ^= num, 0);
    }
    return answer;
};

function getSubsets (nums) {
    let subsets = [[]];
    nums.forEach(num => {
        let container = [];
        for (let set of subsets) {
            container.push([...set, num]);
        }
        subsets.push(...container);
    });
    subsets.shift(); // remove empty array
    return subsets;
}
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    // create 3 arrays  
    // iterate through nums, if num < pivot push into 1st array 
    // if nums is = pivot push in middle array 
    // nums is > pivot push in last array 
    // join array, set nums = array 
    let less = [];
    let equal = [];
    let great = [];
    nums.forEach(num => {
        if (num < pivot) less.push(num);
        if (num === pivot) equal.push(num);
        if (num > pivot) great.push(num);
    });
    nums = [...less, ...equal, ...great];
    return nums;
};
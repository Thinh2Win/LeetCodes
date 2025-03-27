/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    /*
        Input: 
        - nums array containing numbers 
        Output: 
        - idx at which we can split the nums array so that 
            - the left and right side have the dominant element as the majority 
            - ex. [1,2,2,2] splitting at idx 2 -> [1,2,2] [2] , 2 is the majority on both sides 
            - return -1 if not possible
        Constraints: 
            - time space? 
        Edge: 
        - empty nums 
        - are we guarenteed to have a dominate element? 

        Approach: sliding window
            - first get the count of the dominate element 
            - as we increase our window we keep count of element in our window 
            - when the element is dominant in our window we check if the right is valid 
            - we know the left is valid if, window.length - element count < element count 
            - similarly we know the right is valid if, 
            - nums length - window length - current elements < total element count - window element 
            - ex. [2,1,3,1,1,1,7,1,2,1] dom element count = 6 
            - [2,1,3,1,1] window is valid since window length (5) - element (3) = 2 < 3 
            - [1,7,1,2,1] right side is valid since
            - num length (10) - window length (5) - (total elements(6) - curr elements (3) ) < total element (6) - curr elements (3)
            - 2 < 3 
    */

    // find dom element and count 
    // using a map, a max variable [num, max count] 
    const map = {};
    const max = [0, 0];
    // loop through nums and increment its count in map 
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
        if (map[num] > max[1]) {
    // if the count is > max count we set the num to variable[0]
            max[0] = num;
            max[1] = map[num];
        }
    };
    // set up sliding window using 2 pointers 
    let L = 0;
    let totalElement = max[1];
    let currElement = 0;
    for (let R = 0; R < nums.length; R++) {
        // keep track of dom element count
        if (nums[R] === max[0]) currElement += 1;
    // if we reach a valid left side we check the right 
        // valid left if 
        // window.length - element count < element count
        // valid right if 
        // nums length - window length - (total elements - current elements) < total element count - current elements 
        let windowLength = R - L + 1;
        if (validLeft(windowLength, currElement) && validRight(windowLength, nums.length, currElement, totalElement)) {
    // if both sides are good we can return R 
            return R;
        }
    }
    return -1;
    // if loop ends we can return -1 
};

function validLeft(windowLength, currElement) {
    return windowLength - currElement < currElement;
    // valid if curr element is majority 
    // all other nums = total elements - curr element count
    // window length is total elements in the window 
    // windowLength - currElement (all other nums) < curr element count means curr element is majority
}

function validRight(windowLength, numsLength, currElement, totalElement) {
    return numsLength - windowLength - (totalElement - currElement) < totalElement - currElement;
    // same reasoning as left
    // all other nums is our right window 
    // right window = total length of nums - left window 
    // to find dom elements left within right window = total element count - current element count from left window 
    // that means all other nums in the right = right window - right dom elements 
    // giving us numsLength - windowLength - (totalElement - currElement) 
    // so if all other nums on the right is < curr element count on the right 
    // the right is valid
}
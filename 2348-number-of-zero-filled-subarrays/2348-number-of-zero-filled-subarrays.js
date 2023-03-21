/**
 * @param {number[]} nums
 * @return {number}
 */
const factorials = {
        0: 0,
        1: 1,
        2: 3, 
        3: 6,
        4: 10,
        5: 15, 
};

var zeroFilledSubarray = function(nums) {
    // the number of subarrays of an array is the factorial of the length 
    // iterate through nums array and find total length of continuous 0's
    // increment a count by the factorial of continuos zeros 
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let zeros = 0;
        while (nums[i] === 0) {
            zeros += 1;
            i += 1;
        };
        count += findFactorial(zeros);
        zeros = 0;
    };
    return count;
};

function findFactorial(num) {
    if (factorials[num] !== undefined) return factorials[num];
    let i = 6;
    while(i <= num) {
        factorials[i] = factorials[i - 1] + i;
        i += 1;
    }
    return factorials[num];
}
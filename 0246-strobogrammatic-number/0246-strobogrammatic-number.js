/**
 * @param {string} num
 * @return {boolean}
 */
const invalid = {
    2: true,
    3: true,
    4: true,
    5: true,
    7: true
}

var isStrobogrammatic = function(num) {
    // valid single numbers 1 & 8
    // valid pairs are 6 and 9 
    // if it contains 2, 3, 4, 5, 7 it is automatically invalid
    // iterate through num string 
    // have an array 
    let nums = [];
    for (let i = 0; i < num.length; i++) {
        switch(num[i]) {
            case '0':
                nums.push('0');
                break;
            case '1':
                nums.push('1');
                break;
            case '8': 
                nums.push('8');
                break;
            case '6': 
                nums.push('9');
                break;
            case '9':
                nums.push('6');
                break;
            default: 
                return false;
        }
    }
    return nums.reverse().join('') === num;
};
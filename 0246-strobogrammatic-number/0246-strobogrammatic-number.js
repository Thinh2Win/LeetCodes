/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
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
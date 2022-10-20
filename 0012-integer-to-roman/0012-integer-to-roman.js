/**
 * @param {number} num
 * @return {string}
 */
const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

var intToRoman = function(num) {
    let answer = '';
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            answer += rom[i];
            num -= val[i];
        }
    }
    return answer;
};
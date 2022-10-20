/**
 * @param {number} num
 * @return {string}
 */

let map = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M' 
};

let convert = {
        4: 1000,
        3: 100, 
        2: 10, 
        1: 1
};

var intToRoman = function(num) {
    let answer = '';
    let numbers = `${num}`;
    for (let i = 0; i < numbers.length; i++) {
        let currentSpot = numbers.length - i;
        let count = +numbers[i];
        if (+numbers[i] < 5) {
            if (+numbers[i] === 4) {
                answer += map[1 * convert[currentSpot]];
                answer += map[5 * convert[currentSpot]];
            } else {
                 while(count > 0) {
                answer += map[1 * convert[currentSpot]];
                count -= 1;
            }
            }
        }
        if (+numbers[i] === 5) {
            answer += map[5 * convert[currentSpot]];
        }
        if (+numbers[i] > 5) {
            if (+numbers[i] === 9) {
                answer += map[1 * convert[currentSpot]];
                answer += map[10 * convert[currentSpot]];
            } else {
              answer += map[5 * convert[currentSpot]];
            count -= 5;
            while (count > 0) {
                answer += map[1 * convert[currentSpot]];
                count -= 1;
                }   
            }
        }
    }
    return answer;
};
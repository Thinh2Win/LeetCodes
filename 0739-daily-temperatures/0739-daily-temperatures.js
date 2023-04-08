/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [[Infinity]];
    let answer = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        let currTemp = temperatures[i];
        if (currTemp <= stack.at(-1)[0]) {
            stack.push([currTemp, i]);
        } else {
            while (currTemp > stack.at(-1)[0]) {
                let [pastTemp, idx] = stack.pop();
                answer[idx] = i - idx;
            }
            stack.push([currTemp, i]);
        }
    }
    return answer;
};
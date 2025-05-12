/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let answer = new Set();
    let visited = new Array(digits.length).fill(0);

    const helper = (nums, container) => {
        if (container.length >= 3) {
            let number = +container.join('');
            if (number % 2 === 0) answer.add(number);
            return
        };

        for (let i = 0; i <nums.length; i++) {
            let num = nums[i];
            if ((!container.length && num == 0) || visited[i]) continue;
            visited[i] = 1;
            container.push(num);
            helper(nums, container);
            container.pop(num);
            visited[i] = 0;
        }
    };
    helper(digits, []);
    return Array.from(answer).sort((a, b) => a - b);
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    /*
        arr = [3, 1, 2, 7, 4]
        i = 0 (3)
            subarrays [3] -> 3
        i = 1 (1)
            new subarrays [3, 1], [1] -> 1 + 1 -> 2
        i = 2 (2)
            [3, 1, 2], [1,2], [2] -> 1 + 1 + 2 -> 4
        i = 3 (7)
            [3,1,2,7], [1,2,7], [2,7], [7] -> 1 + 1 + 2 + 7 -> 11
        i = 4 (4)
            [3,1,2,7,4], [1,2,7,4], [2,7,4], [7,4], [4] -> 1 + 1 + 2 + 4 + 4 -> 12

        total = 3 + 2 + 4 + 11 + 12 -> 32 

        There are 2 main patterns that will help us 
            1.) when the number is increasing or same, we can use the calculations of the one before it
                ex. from 1 -> 2, 2 -> 7
                - for 1 we have [3, 1], [1] 
                - and 2 we have [3, 1, 2], [1,2], [2] 
                - notice how adding 2 doesnt change our min from the prev subarrays 
                - therefore we can use the value of the previous idx + current number = 2 
                ex. 2 -> 7
                    [3, 1, 2], [1,2], [2]
                    [3,1,2,7], [1,2,7], [2,7], [7]
                    - adding 7 doesn't change the previous mins
                    - so we can take the previous value 4 and add current number 7 
                    - 4 + 7 = 11
            
            2.) when the number is decreasing we need to go back and find the prev number that is less 
                ex. from 7 -> 4 
                2-  [3, 1, 2], [1,2], [2] -> 4
                7 - [3,1,2,7], [1,2,7], [2,7], [7] -> 11
                4 - [3,1,2,7,4], [1,2,7,4], [2,7,4], [7,4], [4]
                we can reuse val from 2 = 4 + currNumber * (distance from currNumber to last min idx) 
                distance = 4 - 2 = 2 
                4 + currNum(4) * 2 = 4 + 8 = 12
        
        Approach: monotonic stack 
            - keep track of the min val 
            - keep a dp to track val at index 
            - loop through nums 
                - if stack is empty, the current num is the min, so we do 
                    - currNum + currNum * distance from 0 (which is just its own idx)
                    - currNum + currNum * curr idx
                - if top of stack is less than curr num 
                    - calculate dp[idx] = currNum + dp[idx - 1];
                - else if top is greater than curr num
                    - keep popping from stack until top is greater than curr num or empty 
                    - push num into stack 
                    - calculate dp[idx] via currNum + currNum * distance
            - add up all values in dp array and return 
    */  

      const stack = []; // keep index for the latest smaller values
    const res = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        const j = stack.length ? stack[stack.length - 1] : -1;
        if (j == -1) {
            res[i] = 0
        } else {
            res[i] = res[j]
        }

        res[i] += (i - j) * arr[i];

        stack.push(i);
    }

    return res.reduce((sum, val) => sum + val, 0) % (10**9 + 7);   
};
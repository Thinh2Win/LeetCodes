/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // let counter = 0;
  //   const loop = (number) => {
  //       if (number === 0) {
  //           counter += 1;
  //           return;
  //       }
  //       if (number - 2 >= 0) {
  //           loop(number - 2);
  //       } 
  //       if (number - 1 >= 0) {
  //           loop (number - 1);
  //       }
  //   }
  //   loop(n);
  //   return counter;
    let memo = {};
    memo[1] = 1;
    memo[2] = 2;
    for (let i = 3; i <= n; i += 1) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n];
};